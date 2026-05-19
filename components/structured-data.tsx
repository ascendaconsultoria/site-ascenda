import { absoluteUrl, siteConfig } from "@/lib/site-config"

const faqs = [
  {
    question: "O Ascenda atende empresas de todo o Brasil?",
    answer:
      "Sim. O Ascenda atende empresas de todo o Brasil por meio de diagnósticos, consultorias, treinamentos e projetos estratégicos em marketing, vendas, processos comerciais, CRM e tecnologia aplicada ao crescimento.",
  },
  {
    question: "Quais tipos de empresas o Ascenda atende?",
    answer:
      "O Ascenda atende empresas que precisam organizar melhor marketing, vendas e tecnologia para crescer com mais clareza. Trabalhamos com negócios que querem melhorar sua geração de demanda, estruturar processos comerciais, aumentar previsibilidade de vendas e tomar decisões com mais controle sobre os resultados.",
  },
  {
    question: "Quais serviços de marketing o Ascenda oferece?",
    answer:
      "O Ascenda oferece consultoria de marketing, auditoria de marketing, tráfego pago, social media estratégico, landing pages, posicionamento e estruturação de campanhas para captação de leads.",
  },
  {
    question: "O Ascenda também trabalha com vendas e processos comerciais?",
    answer:
      "Sim. Além de marketing, o Ascenda estrutura funis de vendas, processos comerciais, scripts, treinamentos, CRM, indicadores e rotinas de acompanhamento comercial.",
  },
  {
    question: "Vocês implementam CRM, automações e tecnologia para vendas?",
    answer:
      "Sim. Estruturamos pipelines, etapas comerciais, campos, automações básicas, dashboards e rotinas de acompanhamento para dar mais controle ao processo de marketing e vendas.",
  },
  {
    question: "Como funciona a análise inicial?",
    answer:
      "A análise inicial serve para entender o momento da empresa, identificar gargalos em marketing, vendas ou tecnologia e recomendar o caminho mais adequado antes da apresentação de uma proposta.",
  },
]

const navigationLinks = [
  { name: "Início", url: absoluteUrl("/#inicio") },
  { name: "Soluções", url: absoluteUrl("/#solucoes") },
  { name: "Método", url: absoluteUrl("/#metodo") },
  { name: "Equipe", url: absoluteUrl("/#equipe") },
  { name: "Contato", url: absoluteUrl("/#contato") },
  { name: "FAQ", url: absoluteUrl("/#faq") },
]

export function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness", "Organization"],
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: ["Ascenda", "Ascenda Marketing, Vendas e Tecnologia"],
    url: siteConfig.url,
    logo: absoluteUrl("/icon-512.png"),
    image: [absoluteUrl("/og-ascenda.png"), absoluteUrl("/icon-512.png")],
    description: siteConfig.description,
    slogan: "Marketing, vendas e tecnologia conectados ao crescimento do seu negócio.",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    areaServed: siteConfig.areaServed.map((area) => ({
      "@type": area === "Brasil" ? "Country" : "Place",
      name: area,
    })),
    sameAs: siteConfig.sameAs,
    founder: siteConfig.founders.map((founder) => ({
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.jobTitle,
      sameAs: founder.sameAs,
    })),
    knowsAbout: siteConfig.keywords,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "sales",
        areaServed: "BR",
        availableLanguage: ["pt-BR"],
        email: siteConfig.email,
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Soluções Ascenda em Marketing, Vendas e Tecnologia",
      itemListElement: siteConfig.services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service,
          serviceType: service,
          provider: {
            "@id": `${siteConfig.url}#organization`,
          },
          areaServed: siteConfig.areaServed.map((area) => ({
            "@type": area === "Brasil" ? "Country" : "Place",
            name: area,
          })),
        },
      })),
    },
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
    inLanguage: "pt-BR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}#webpage`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    isPartOf: {
      "@id": `${siteConfig.url}#website`,
    },
    about: {
      "@id": `${siteConfig.url}#organization`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl("/og-ascenda.png"),
      width: 1200,
      height: 630,
    },
    inLanguage: "pt-BR",
    mainEntity: {
      "@id": `${siteConfig.url}#organization`,
    },
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteConfig.url}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Soluções",
        item: absoluteUrl("/#solucoes"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contato",
        item: absoluteUrl("/#contato"),
      },
    ],
  }

  const siteNavigation = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.url}#navigation`,
    name: "Navegação principal do site Ascenda",
    itemListElement: navigationLinks.map((link, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: link.name,
      url: link.url,
    })),
  }

  const serviceList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.url}#services`,
    name: "Serviços de marketing, vendas e tecnologia do Ascenda",
    itemListElement: siteConfig.services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service,
      url: `${siteConfig.url}#solucoes`,
    })),
  }

  return (
    <>
      {[organization, website, webPage, faqPage, breadcrumb, siteNavigation, serviceList].map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
