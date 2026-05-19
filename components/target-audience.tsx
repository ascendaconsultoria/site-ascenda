"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, Target, BarChart3, Settings, MessageSquare } from "lucide-react"

const audiences = [
  {
    icon: Users,
    text: "Empresas que recebem leads, mas não sabem onde perdem vendas.",
  },
  {
    icon: TrendingUp,
    text: "Negócios que investem em marketing, mas têm dificuldade de medir retorno.",
  },
  {
    icon: Target,
    text: "Empresas que dependem demais de indicação e querem criar canais de aquisição.",
  },
  {
    icon: BarChart3,
    text: "Times comerciais que precisam de processo, rotina e acompanhamento.",
  },
  {
    icon: Settings,
    text: "Empresas que precisam organizar CRM, dados, automações ou ferramentas internas.",
  },
  {
    icon: MessageSquare,
    text: "Negócios que querem melhorar posicionamento, comunicação e presença digital.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
}

export function TargetAudience() {
  return (
    <section className="py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

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
            Para quem é
          </span>
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            O Ascenda é para empresas que querem{" "}
            <span className="gradient-text">crescer com organização</span>
          </h2>
        </motion.div>

        {/* Audience Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full p-4 lg:p-5 rounded-xl lg:rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 hover:border-accent/30">
                {/* Gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex items-start gap-3">
                  <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-foreground leading-relaxed text-sm lg:text-base group-hover:text-foreground/90 transition-colors">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
