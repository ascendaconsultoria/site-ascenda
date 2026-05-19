"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

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

export function FAQ() {
  return (
    <section id="faq" className="py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Dúvidas
          </span>
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Perguntas{" "}
            <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Tire suas dúvidas sobre o Ascenda e nossos serviços.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group border border-border rounded-xl lg:rounded-2xl px-4 lg:px-6 bg-card data-[state=open]:shadow-lg data-[state=open]:border-accent/30 transition-all duration-300 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold py-4 lg:py-5 hover:no-underline group-hover:text-accent transition-colors text-sm lg:text-base">
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-data-[state=open]:bg-accent group-data-[state=open]:text-white transition-all duration-300">
                      <HelpCircle className="w-4 h-4 lg:w-5 lg:h-5 text-accent group-data-[state=open]:text-white" />
                    </div>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 lg:pb-5 pl-11 lg:pl-14 leading-relaxed text-sm lg:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
