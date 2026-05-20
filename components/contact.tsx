"use client"

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Lock, ArrowRight, CheckCircle2, Loader2 } from "lucide-react"

const cargos = [
  "Sócio/Proprietário",
  "Diretor",
  "Gerente",
  "Coordenador",
  "Analista",
  "Outro",
]

const estados = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
]

type FormData = {
  nome: string
  whatsapp: string
  cargo: string
  empresa: string
  email: string
  estado: string
  cidade: string
}

interface FormErrors {
  nome?: string
  whatsapp?: string
  cargo?: string
  empresa?: string
  email?: string
  estado?: string
  cidade?: string
}

type MunicipioIBGE = {
  nome: string
}

const initialFormData: FormData = {
  nome: "",
  whatsapp: "",
  cargo: "",
  empresa: "",
  email: "",
  estado: "",
  cidade: "",
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [cidades, setCidades] = useState<string[]>([])
  const [isLoadingCidades, setIsLoadingCidades] = useState(false)
  const [cityLoadError, setCityLoadError] = useState("")

  useEffect(() => {
    if (!formData.estado) {
      setCidades([])
      setCityLoadError("")
      return
    }

    const controller = new AbortController()

    async function loadCidades() {
      setIsLoadingCidades(true)
      setCityLoadError("")
      setCidades([])
      setFormData((prev) => ({ ...prev, cidade: "" }))

      try {
        const response = await fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${formData.estado}/municipios?orderBy=nome`,
          { signal: controller.signal }
        )

        if (!response.ok) {
          throw new Error("Não foi possível carregar as cidades")
        }

        const data = (await response.json()) as MunicipioIBGE[]
        const nomes = data
          .map((municipio) => municipio.nome)
          .filter(Boolean)
          .sort((a, b) => a.localeCompare(b, "pt-BR"))

        setCidades(nomes)
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return
        }

        setCityLoadError("Não foi possível carregar as cidades. Tente selecionar o estado novamente.")
      } finally {
        setIsLoadingCidades(false)
      }
    }

    loadCidades()

    return () => controller.abort()
  }, [formData.estado])

  useEffect(() => {
    if (!isSuccess) {
      return
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isSuccess])

  const formatPhone = (value: string): string => {
    const numbers = value.replace(/\D/g, "")

    if (numbers.length <= 2) {
      return numbers.length > 0 ? `(${numbers}` : ""
    }

    if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    }

    if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
    }

    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setFormData({ ...formData, whatsapp: formatted })
    if (errors.whatsapp) {
      setErrors({ ...errors, whatsapp: undefined })
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório"
    }

    const phoneNumbers = formData.whatsapp.replace(/\D/g, "")
    if (!phoneNumbers) {
      newErrors.whatsapp = "Contato é obrigatório"
    } else if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
      newErrors.whatsapp = "Telefone inválido"
    }

    if (!formData.cargo) {
      newErrors.cargo = "Selecione um cargo"
    }

    if (!formData.empresa.trim()) {
      newErrors.empresa = "Empresa é obrigatória"
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório"
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Digite um e-mail válido"
    }

    if (!formData.estado) {
      newErrors.estado = "Selecione o estado"
    }

    if (!formData.cidade) {
      newErrors.cidade = "Selecione a cidade"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitError("")

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          nome: formData.nome.trim(),
          empresa: formData.empresa.trim(),
          email: formData.email.trim().toLowerCase(),
          origem: "Site Ascenda",
          submittedAt: new Date().toISOString(),
        }),
      })

      const result = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(result?.error || "Erro ao enviar formulário")
      }

      setIsSuccess(true)
      setFormData(initialFormData)
      setErrors({})
      setCidades([])
      setCityLoadError("")
    } catch (error) {
      console.error("Erro ao enviar:", error)
      setSubmitError("Não foi possível enviar o formulário agora. Confira os dados e tente novamente em alguns instantes.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData) => (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined })
    }
  }

  const handleSelectChange = (field: keyof FormData) => (value: string) => {
    setFormData({ ...formData, [field]: value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined })
    }
  }

  return (
    <section id="contato" className="py-16 lg:py-20 bg-[#0B0B0B] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Contato
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Vamos estruturar o próximo passo da sua empresa?
          </h2>
          <p className="text-base md:text-lg text-white/65 leading-relaxed">
            Preencha o formulário e fale com o Ascenda para solicitar uma análise inicial e receber uma
            recomendação alinhada ao momento do seu negócio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-md mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-xl" />

            <div className="relative bg-[#1A1A1A] rounded-2xl p-5 sm:p-6 border border-accent/20 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-white/70 mb-1 block">
                    Nome Completo <span className="text-accent">*</span>
                  </label>
                  <Input
                    placeholder="Seu nome completo"
                    className={`w-full bg-white/10 border-white/10 text-white placeholder:text-white/40 h-10 rounded-lg text-sm focus:border-accent focus:ring-accent ${
                      errors.nome ? "border-red-500 focus:border-red-500" : ""
                    }`}
                    value={formData.nome}
                    onChange={handleInputChange("nome")}
                    name="nome"
                    autoComplete="name"
                    required
                    aria-invalid={Boolean(errors.nome)}
                  />
                  {errors.nome && <p className="text-red-400 text-xs mt-0.5">{errors.nome}</p>}
                </div>

                <div>
                  <label className="text-xs font-medium text-white/70 mb-1 block">
                    Contato/WhatsApp <span className="text-accent">*</span>
                  </label>
                  <Input
                    placeholder="(00) 00000-0000"
                    className={`w-full bg-white/10 border-white/10 text-white placeholder:text-white/40 h-10 rounded-lg text-sm focus:border-accent focus:ring-accent ${
                      errors.whatsapp ? "border-red-500 focus:border-red-500" : ""
                    }`}
                    value={formData.whatsapp}
                    onChange={handlePhoneChange}
                    maxLength={15}
                    name="whatsapp"
                    autoComplete="tel-national"
                    inputMode="tel"
                    required
                    aria-invalid={Boolean(errors.whatsapp)}
                  />
                  {errors.whatsapp && <p className="text-red-400 text-xs mt-0.5">{errors.whatsapp}</p>}
                </div>

                <div>
                  <label className="text-xs font-medium text-white/70 mb-1 block">
                    Cargo <span className="text-accent">*</span>
                  </label>
                  <Select value={formData.cargo} onValueChange={handleSelectChange("cargo")}>
                    <SelectTrigger
                      className={`w-full bg-white/10 border-white/10 text-white h-10 rounded-lg text-sm ${
                        errors.cargo ? "border-red-500" : ""
                      }`}
                    >
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      {cargos.map((cargo) => (
                        <SelectItem key={cargo} value={cargo}>
                          {cargo}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.cargo && <p className="text-red-400 text-xs mt-0.5">{errors.cargo}</p>}
                </div>

                <div>
                  <label className="text-xs font-medium text-white/70 mb-1 block">
                    Empresa <span className="text-accent">*</span>
                  </label>
                  <Input
                    placeholder="Nome da sua empresa"
                    className={`w-full bg-white/10 border-white/10 text-white placeholder:text-white/40 h-10 rounded-lg text-sm focus:border-accent focus:ring-accent ${
                      errors.empresa ? "border-red-500 focus:border-red-500" : ""
                    }`}
                    value={formData.empresa}
                    onChange={handleInputChange("empresa")}
                    name="empresa"
                    autoComplete="organization"
                    required
                    aria-invalid={Boolean(errors.empresa)}
                  />
                  {errors.empresa && <p className="text-red-400 text-xs mt-0.5">{errors.empresa}</p>}
                </div>

                <div>
                  <label className="text-xs font-medium text-white/70 mb-1 block">
                    E-mail Profissional <span className="text-accent">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    className={`w-full bg-white/10 border-white/10 text-white placeholder:text-white/40 h-10 rounded-lg text-sm focus:border-accent focus:ring-accent ${
                      errors.email ? "border-red-500 focus:border-red-500" : ""
                    }`}
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-0.5">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs font-medium text-white/70 mb-1 block">
                      Estado <span className="text-accent">*</span>
                    </label>
                    <Select value={formData.estado} onValueChange={handleSelectChange("estado")}>
                      <SelectTrigger
                        className={`w-full bg-white/10 border-white/10 text-white h-10 rounded-lg text-sm ${
                          errors.estado ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="UF" />
                      </SelectTrigger>
                      <SelectContent className="max-h-72">
                        {estados.map((estado) => (
                          <SelectItem key={estado} value={estado}>
                            {estado}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.estado && <p className="text-red-400 text-xs mt-0.5">{errors.estado}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-medium text-white/70 mb-1 block">
                      Cidade <span className="text-accent">*</span>
                    </label>
                    <Select
                      value={formData.cidade}
                      onValueChange={handleSelectChange("cidade")}
                      disabled={!formData.estado || isLoadingCidades || cidades.length === 0}
                    >
                      <SelectTrigger
                        className={`w-full bg-white/10 border-white/10 text-white h-10 rounded-lg text-sm disabled:opacity-50 ${
                          errors.cidade ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue
                          placeholder={
                            isLoadingCidades
                              ? "Carregando..."
                              : formData.estado
                                ? "Selecione"
                                : "Selecione UF"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent className="max-h-72">
                        {cidades.map((cidade) => (
                          <SelectItem key={cidade} value={cidade}>
                            {cidade}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.cidade && <p className="text-red-400 text-xs mt-0.5">{errors.cidade}</p>}
                  </div>
                </div>

                {cityLoadError && <p className="text-red-400 text-xs mt-0.5">{cityLoadError}</p>}

                <div className="flex items-center gap-2 text-xs text-green-400 pt-1">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Seus dados estão 100% seguros conosco.</span>
                </div>

                {submitError && (
                  <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300">
                    {submitError}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold h-11 text-sm rounded-lg group disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Falar com um especialista
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {isSuccess && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-md rounded-3xl border border-accent/25 bg-[#0B0B0B] p-7 text-center shadow-2xl sm:p-8"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent">
              <CheckCircle2 className="h-9 w-9" />
            </div>

            <h2 id="success-modal-title" className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              Formulário enviado com sucesso!
            </h2>

            <p className="mb-7 text-sm leading-relaxed text-white/70 sm:text-base">
              Recebemos suas informações. Em breve, nossa equipe entrará em contato para agendar sua análise.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90"
              >
                Entendido
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsSuccess(false)
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                className="rounded-full border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                Voltar ao início
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
