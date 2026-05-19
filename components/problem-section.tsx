"use client"

import { motion } from "framer-motion"
import { AlertTriangle, TrendingDown, Users, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const problems = [
  {
    icon: TrendingDown,
    title: "Leads que não convertem",
    description: "Você gera leads, mas poucos viram clientes de verdade",
  },
  {
    icon: Users,
    title: "Equipe sem processo",
    description: "Cada vendedor faz do seu jeito, sem padrão nem previsibilidade",
  },
  {
    icon: Clock,
    title: "Falta de tempo",
    description: "Você está preso na operação e não consegue focar em estratégia",
  },
  {
    icon: AlertTriangle,
    title: "Ferramentas dispersas",
    description: "CRM, planilhas, WhatsApp... nada conversa entre si",
  },
]

export function ProblemSection() {
  return (
    <section className="py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 lg:mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Você se identifica?
            </span>
            <h2 
              className="mx-auto max-w-7xl text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-5xl font-bold mb-4 leading-tight text-foreground"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="block lg:whitespace-nowrap">
                Se sua empresa cresce, mas <span className="text-accent">falta estrutura</span>,
              </span>
              <span className="block">
                você não está sozinho.
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              A maioria das empresas em crescimento enfrenta os mesmos desafios. 
              O problema não é falta de esforço, é falta de método.
            </p>
          </motion.div>

          {/* Problems Grid */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 mb-10 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-5 lg:p-6 rounded-xl lg:rounded-2xl border border-border hover:border-accent/30 transition-all duration-300 bg-card">
                  <div className="flex items-start gap-3 lg:gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <problem.icon className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-base lg:text-lg font-semibold mb-1.5 group-hover:text-accent transition-colors">
                        {problem.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-4 text-sm lg:text-base">
              Está na hora de mudar isso. Veja como podemos ajudar.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 lg:px-8 group"
            >
              <Link href="#solucoes">
                Conhecer as soluções
                <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
