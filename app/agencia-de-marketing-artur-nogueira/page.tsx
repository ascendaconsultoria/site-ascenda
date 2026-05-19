import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { absoluteUrl, siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Agência de Marketing em Artur Nogueira | Ascenda",
  description:
    "Marketing, vendas e tecnologia para empresas de Artur Nogueira e região que precisam gerar demanda, organizar vendas, estruturar processos comerciais, CRM e crescimento com mais clareza.",
  alternates: {
    canonical: "/agencia-de-marketing-artur-nogueira",
  },
  openGraph: {
    title: "Agência de Marketing em Artur Nogueira | Ascenda",
    description:
      "Soluções estratégicas de marketing, vendas e tecnologia para empresas de Artur Nogueira, região de Campinas e todo o Brasil.",
    url: absoluteUrl("/agencia-de-marketing-artur-nogueira"),
    type: "website",
    images: [
      {
        url: absoluteUrl("/og-ascenda.png"),
        width: 1200,
        height: 630,
        alt: "Ascenda - Marketing, Vendas e Tecnologia",
      },
    ],
  },
}

const services = [
  "Consultoria de marketing",
  "Gestão de tráfego pago",
  "Social media estratégico",
  "Landing pages para captação de leads",
  "Consultoria comercial",
  "Estruturação de processos de vendas",
  "Implementação de CRM",
  "Tecnologia aplicada a marketing e vendas",
]

const cities = [
  "Artur Nogueira",
  "Campinas",
  "Holambra",
  "Cosmópolis",
  "Engenheiro Coelho",
  "Limeira",
  "Mogi Mirim",
  "Mogi Guaçu",
]

export default function LocalMarketingPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/agencia-de-marketing-artur-nogueira#service`,
    name: "Agência de Marketing em Artur Nogueira",
    serviceType: "Marketing, vendas e tecnologia",
    description:
      "Serviços estratégicos de marketing, vendas e tecnologia para empresas que buscam gerar demanda, estruturar processos comerciais e crescer com mais previsibilidade.",
    provider: {
      "@id": `${siteConfig.url}#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: cities.map((city) => ({
      "@type": "City",
      name: city,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Ascenda para empresas de Artur Nogueira e região",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
  }

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <Header />
      <section className="relative overflow-hidden bg-[#0B0B0B] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
          <span className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-4 py-2 text-sm font-medium text-accent mb-6">
            Marketing, vendas e tecnologia
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Agência de marketing em <span className="gradient-text">Artur Nogueira</span> para empresas que querem crescer melhor
          </h1>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mb-8">
            O Ascenda ajuda empresas de Artur Nogueira, região de Campinas e todo o Brasil a conectar marketing, vendas e tecnologia em uma operação mais clara, mensurável e preparada para escalar.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 md:px-8 py-5 md:py-6 group">
            <Link href="/#contato">
              Solicitar análise inicial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-[1fr_0.85fr] gap-10 lg:gap-16 items-start">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Soluções estratégicas
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-5 text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
              Mais do que aparecer: estrutura para atrair, vender e medir melhor
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Marketing isolado gera movimento, mas nem sempre gera crescimento. Por isso, o trabalho do Ascenda conecta geração de demanda, processo comercial, CRM, dados e tecnologia para que a empresa tenha mais clareza sobre o que está funcionando e onde precisa evoluir.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A atuação combina diagnóstico, planejamento e execução estratégica, sempre considerando o momento da empresa, a maturidade da operação e os objetivos comerciais.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 lg:p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-5">Serviços relacionados</h3>
            <div className="space-y-3">
              {services.map((service) => (
                <div key={service} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/60">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-5 text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            Atendimento para Artur Nogueira, região de Campinas e empresas em todo o Brasil
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A presença local facilita a conexão com empresas do interior paulista, mas o trabalho do Ascenda não se limita à região. A metodologia foi pensada para apoiar negócios que precisam organizar marketing, vendas e tecnologia com mais clareza, independentemente da cidade em que atuam.
          </p>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <span key={city} className="rounded-full bg-background border border-border px-4 py-2 text-sm text-muted-foreground">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
