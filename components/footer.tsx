"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Linkedin, ArrowUpRight, Heart } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#metodo", label: "Método" },
  { href: "#equipe", label: "Equipe" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
]

export function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 dot-pattern" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-2 space-y-4 lg:space-y-6"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Secund%C3%A1rio%20Black-Photoroom%20-%20Copia%20%282%29-uAJSQ4ZwAY9Elte2NOoYy5RmhXFjp7.png"
              alt="Ascenda Consultoria"
              width={240}
              height={64}
              sizes="240px"
              className="h-9 lg:h-10 w-auto brightness-0 invert"
            />
            <p className="text-white/60 max-w-md leading-relaxed text-sm lg:text-base">
              Agência e consultoria de marketing em Artur Nogueira/SP, com soluções de vendas, CRM, 
              tráfego pago, social media e tecnologia para empresas da região de Campinas e interior de SP.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <Link
                href="https://www.instagram.com/ascenda.consultoria/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 lg:w-11 lg:h-11 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <Instagram className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/ascenda-consultoria/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 lg:w-11 lg:h-11 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 lg:mb-5 text-base lg:text-lg">Navegação</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-sm lg:text-base"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3 h-3 lg:w-4 lg:h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 lg:mb-5 text-base lg:text-lg">Contato</h4>
            <div className="space-y-3">
              <div>
                <span className="block text-white/40 text-xs lg:text-sm mb-0.5">WhatsApp</span>
                <a href="tel:+5519978112013" className="text-white/70 hover:text-accent transition-colors text-sm lg:text-base">
                  19 97811-2013
                </a>
              </div>
              <div>
                <span className="block text-white/40 text-xs lg:text-sm mb-0.5">E-mail</span>
                <a href="mailto:comercial@consultoriaascenda.com" className="text-white/70 hover:text-accent transition-colors whitespace-nowrap text-xs sm:text-sm lg:text-base">
                  comercial@consultoriaascenda.com
                </a>
              </div>
              <div>
                <span className="block text-white/40 text-xs lg:text-sm mb-0.5">Localização</span>
                <span className="text-white/70 text-sm lg:text-base">Artur Nogueira/SP</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-6 lg:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3"
        >
          <p className="text-white/40 text-xs lg:text-sm">
            © 2026 Ascenda Consultoria. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-xs lg:text-sm flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 lg:w-4 lg:h-4 text-accent fill-accent" /> para empresas que querem crescer
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
