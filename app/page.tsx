import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ClientsCarousel } from "@/components/clients-carousel"
import { ProblemSection } from "@/components/problem-section"
import { WhatWeDo } from "@/components/what-we-do"
import { Solutions } from "@/components/solutions"
import { Process } from "@/components/process"
import { TargetAudience } from "@/components/target-audience"
import { Method } from "@/components/method"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { StructuredData } from "@/components/structured-data"

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData />
      <Header />
      <Hero />
      <ClientsCarousel />
      <ProblemSection />
      <WhatWeDo />
      <Solutions />
      <Process />
      <TargetAudience />
      <Method />
      <Team />
      <Contact />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
