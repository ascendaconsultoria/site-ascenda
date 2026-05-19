"use client"

import { motion } from "framer-motion"
import { Search, Target, Rocket, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Entendimento do cenário",
    description:
      "Antes de propor qualquer solução, entendemos o negócio, a operação, os canais e os objetivos.",
  },
  {
    number: "02",
    icon: Target,
    title: "Diagnóstico dos pontos críticos",
    description:
      "Analisamos onde estão os gargalos em marketing, vendas, processos ou tecnologia.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Plano de ação",
    description:
      "Definimos prioridades, entregas, responsáveis e próximos passos com clareza.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Implementação e acompanhamento",
    description:
      "Executamos, orientamos ou acompanhamos a evolução conforme o escopo contratado.",
  },
]

export function Process() {
  return (
    <section id="metodo" className="py-16 lg:py-20 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Nosso Processo
          </span>
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Como funciona{" "}
            <span className="gradient-text">nosso trabalho</span>
          </h2>
          <p className="text-base md:text-lg text-white/60">
            Um processo estruturado para garantir resultados reais e mensuráveis.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative p-5 lg:p-6 rounded-xl lg:rounded-2xl border border-white/10 bg-white/5 h-full transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:border-accent/30">
                  {/* Number Badge */}
                  <div className="absolute -top-3 left-5 lg:left-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
                      <div className="relative w-10 h-10 lg:w-11 lg:h-11 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-sm lg:text-base shadow-lg">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-6 mb-4">
                    <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-base lg:text-lg font-bold mb-2 text-white group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
