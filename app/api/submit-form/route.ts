import { NextResponse } from "next/server"

const GOOGLE_SHEETS_WEBHOOK_URL =
  process.env.GOOGLE_SHEETS_WEBHOOK_URL || process.env.GOOGLE_SHEETS_URL
const GOOGLE_SHEETS_WEBHOOK_SECRET = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET || ""

type LeadPayload = {
  nome?: string
  whatsapp?: string
  cargo?: string
  empresa?: string
  email?: string
  estado?: string
  cidade?: string
  origem?: string
  submittedAt?: string
}

function clean(value?: string) {
  return typeof value === "string" ? value.trim() : ""
}

function validateLead(data: LeadPayload) {
  const nome = clean(data.nome)
  const whatsapp = clean(data.whatsapp)
  const cargo = clean(data.cargo)
  const empresa = clean(data.empresa)
  const email = clean(data.email).toLowerCase()
  const estado = clean(data.estado).toUpperCase()
  const cidade = clean(data.cidade)
  const origem = clean(data.origem) || "Site Ascenda"
  const submittedAt = clean(data.submittedAt) || new Date().toISOString()

  const phoneNumbers = whatsapp.replace(/\D/g, "")
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

  if (!nome || !whatsapp || !cargo || !empresa || !email || !estado || !cidade) {
    return {
      ok: false as const,
      error: "Campos obrigatórios não preenchidos",
    }
  }

  if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
    return {
      ok: false as const,
      error: "Telefone inválido",
    }
  }

  if (!emailRegex.test(email)) {
    return {
      ok: false as const,
      error: "E-mail inválido",
    }
  }

  return {
    ok: true as const,
    lead: {
      submittedAt,
      nome,
      whatsapp,
      cargo,
      empresa,
      email,
      estado,
      cidade,
      origem,
    },
  }
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as LeadPayload
    const validation = validateLead(data)

    if (!validation.ok) {
      return NextResponse.json({ error: validation.error }, { status: 400 })
    }

    if (!GOOGLE_SHEETS_WEBHOOK_URL) {
      console.error("Variável GOOGLE_SHEETS_WEBHOOK_URL não configurada")
      return NextResponse.json(
        { error: "Integração com Google Sheets não configurada" },
        { status: 500 }
      )
    }

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10000)

    const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      signal: controller.signal,
      body: JSON.stringify({
        ...validation.lead,
        secret: GOOGLE_SHEETS_WEBHOOK_SECRET,
      }),
    }).finally(() => clearTimeout(timeout))

    const responseText = await response.text()

    let sheetsResult: { success?: boolean; error?: string } | null = null

    try {
      sheetsResult = JSON.parse(responseText)
    } catch {
      sheetsResult = null
    }

    if (!response.ok || sheetsResult?.success === false) {
      console.error("Erro ao enviar para Google Sheets:", responseText)
      return NextResponse.json(
        { error: "Erro ao registrar lead na planilha" },
        { status: 502 }
      )
    }

    console.log("[Ascenda] Lead enviado para Google Sheets:", {
      nome: validation.lead.nome,
      empresa: validation.lead.empresa,
      email: validation.lead.email,
      estado: validation.lead.estado,
      cidade: validation.lead.cidade,
    })

    return NextResponse.json({
      success: true,
      message: "Formulário enviado com sucesso",
    })
  } catch (error) {
    console.error("Erro ao processar formulário:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
