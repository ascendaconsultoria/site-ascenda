"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Instagram } from "lucide-react"

const team = [
  {
    name: "Alisson Almeida",
    role: "Estratégia Comercial",
    description:
      "Responsável por estratégia comercial, vendas e estruturação de processos. Especialista em transformar operações comerciais em máquinas de vendas previsíveis.",
    image: "/alisson-almeida.png",
    linkedin: "https://www.linkedin.com/in/alisson-almeida-940ba314b/",
    instagram: "https://www.instagram.com/alisson.almeidaofc/",
  },
  {
    name: "Micaely Fontana",
    role: "Marketing e Estratégia Digital",
    description:
      "Responsável por marketing, comunicação, posicionamento e estratégia digital. Expert em criar presença de marca que gera conexão e converte.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2025%20de%20abr.%20de%202026%2C%2023_44_25-asox4OSZSw4w7ltTivNe1PynQ53etz.png",
    linkedin: "https://www.linkedin.com/company/ascenda-consultoria/",
    instagram: "https://www.instagram.com/ascenda.consultoria/",
  },
]

export function Team() {
  return (
    <section id="equipe" className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Nossa Equipe
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Quem está por trás do <span className="gradient-text">Ascenda</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            O Ascenda foi criado para ajudar empresas a venderem mais, organizarem seus processos e tomarem decisões com mais clareza.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group h-full"
            >
              <article className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-border bg-card h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 hover:border-accent/30">
                <div className="relative aspect-[4/5] overflow-hidden flex-shrink-0 bg-card border-0 outline-none">
                  <Image
                    src={member.image}
                    alt={`${member.name}, liderança do Ascenda Consultoria`}
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-card via-card/80 to-transparent pointer-events-none translate-y-px" />

                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${member.name}`}
                      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-colors duration-300 shadow-sm"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram de ${member.name}`}
                      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-colors duration-300 shadow-sm"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="relative z-20 -mt-2 p-6 lg:p-8 pt-8 flex-grow bg-card border-0 outline-none shadow-[0_-8px_0_0_var(--card)]">
                  <div className="mb-3">
                    <h3 className="text-xl lg:text-2xl font-bold mb-1 group-hover:text-accent transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium text-sm lg:text-base">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    {member.description}
                  </p>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
