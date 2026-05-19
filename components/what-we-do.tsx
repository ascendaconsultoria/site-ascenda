"use client"

import { motion } from "framer-motion"
import { Megaphone, LineChart, Cpu, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Megaphone,
    title: "Marketing",
    description:
      "Criamos estratégias para atrair, posicionar e comunicar melhor a oferta da sua empresa.",
    color: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    href: "#solucoes-marketing",
  },
  {
    icon: LineChart,
    title: "Vendas",
    description:
      "Estruturamos processos comerciais para melhorar atendimento, conversão e acompanhamento.",
    color: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    href: "#solucoes-vendas",
  },
  {
    icon: Cpu,
    title: "Tecnologia",
    description:
      "Aplicamos ferramentas, dados e automações para dar mais controle e eficiência à operação.",
    color: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    href: "#solucoes-tecnologia",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function WhatWeDo() {
  return (
    <section className="py-16 lg:py-20 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

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
            Nossas Especialidades
          </span>
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            O que fazemos{" "}
            <span className="gradient-text">na prática</span>
          </h2>
          <p className="text-base md:text-lg text-white/60">
            Três pilares que trabalham juntos para transformar sua operação em uma máquina de crescimento.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 lg:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-accent/30 hover:-translate-y-2">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-6 h-6 lg:w-7 lg:h-7 ${service.iconColor}`} />
                  </div>

                  {/* Number */}
                  <span className="absolute top-6 right-6 text-5xl lg:text-6xl font-bold text-white/5 group-hover:text-accent/10 transition-colors">
                    0{index + 1}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed text-sm lg:text-base mb-4">
                    {service.description}
                  </p>

                  {/* Link */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:underline"
                  >
                    Saiba mais
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
