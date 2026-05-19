"use client"

import { motion } from "framer-motion"
import { Blocks, GitBranch, GraduationCap, Activity } from "lucide-react"

const pillars = [
  {
    icon: Blocks,
    title: "Estrutura",
    description:
      "Organizamos as bases da operação para reduzir improviso e dar mais clareza ao crescimento.",
    number: "01",
  },
  {
    icon: GitBranch,
    title: "Método",
    description:
      "Criamos processos, rotinas e critérios para que marketing, vendas e tecnologia trabalhem conectados.",
    number: "02",
  },
  {
    icon: GraduationCap,
    title: "Desenvolvimento",
    description:
      "Apoiamos pessoas e equipes para que a estratégia saia do papel e funcione na prática.",
    number: "03",
  },
  {
    icon: Activity,
    title: "Performance",
    description:
      "Acompanhamos dados, resultados e oportunidades de melhoria para ajustar o caminho.",
    number: "04",
  },
]

export function Method() {
  return (
    <section className="py-16 lg:py-20 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 dot-pattern" />
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-72 lg:w-96 h-72 lg:h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 lg:w-96 h-72 lg:h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            Os 4 Pilares
          </span>
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Nosso método organiza{" "}
            <span className="text-accent">crescimento</span>{" "}
            em quatro frentes
          </h2>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-5 lg:p-6 rounded-xl lg:rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-accent/30 hover:-translate-y-2">
                {/* Number */}
                <span className="absolute top-3 right-3 text-4xl lg:text-5xl font-bold text-white/5 group-hover:text-accent/20 transition-colors duration-300">
                  {pillar.number}
                </span>

                {/* Icon */}
                <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/30 transition-all duration-300">
                  <pillar.icon className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-base lg:text-lg font-bold mb-2 text-white group-hover:text-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm group-hover:text-white/80 transition-colors">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
