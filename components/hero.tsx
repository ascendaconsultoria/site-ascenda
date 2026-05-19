"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Play, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const benefits = [
  "Estratégias personalizadas",
  "Resultados mensuráveis",
  "Suporte contínuo",
]

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0B0B]">
      {/* Decorative Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-40 right-20 w-20 h-20 border-2 border-accent/20 rotate-45 hidden lg:block"
        animate={{ rotate: [45, 90, 45], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-16 h-16 bg-accent/10 rounded-full hidden lg:block"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Marketing, vendas e tecnologia para empresas em todo o Brasil</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Marketing, vendas e tecnologia para{" "}
              <span className="gradient-text">crescimento</span>{" "}
              real
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-white/70 leading-relaxed mb-6"
            >
              Estruturamos o crescimento da sua empresa conectando marketing, vendas e tecnologia em uma operação mais estratégica, mensurável e preparada para escalar.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 md:gap-4 mb-8"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  {benefit}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 md:px-8 py-5 md:py-6 text-sm md:text-base group"
              >
                <Link href="#contato">
                  Solicitar Diagnóstico Gratuito
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white font-semibold px-6 md:px-8 py-5 md:py-6 text-sm md:text-base group bg-transparent hover:bg-white/10 hover:border-white/50 hover:text-white"
              >
                <Link href="#metodo">
                  <Play className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                  Ver como funciona
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 pt-8 border-t border-white/10"
            >
              <p className="text-sm text-white/50 mb-4">Empresas que já cresceram conosco</p>
              <div className="flex items-center gap-6 md:gap-8">
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-bold gradient-text">+50</span>
                  <span className="text-xs text-white/50">Empresas</span>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-bold gradient-text">+R$10M</span>
                  <span className="text-xs text-white/50">Em vendas geradas</span>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-bold gradient-text">98%</span>
                  <span className="text-xs text-white/50">Satisfação</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-2xl" />
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-accent/20 shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2025%20de%20abr.%20de%202026%2C%2023_44_25-asox4OSZSw4w7ltTivNe1PynQ53etz.png"
                  alt="Profissional representando estratégia de marketing, vendas e tecnologia do Ascenda"
                  width={720}
                  height={900}
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/40 to-transparent" />
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-8 top-1/4 bg-white rounded-xl p-4 shadow-lg border border-accent/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0B0B0B]">CRM Estruturado</p>
                    <p className="text-xs text-gray-500">Pipeline organizado</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -right-8 bottom-1/4 bg-white rounded-xl p-4 shadow-lg border border-accent/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-lg font-bold">+</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0B0B0B]">+40% Conversão</p>
                    <p className="text-xs text-gray-500">Média dos clientes</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
