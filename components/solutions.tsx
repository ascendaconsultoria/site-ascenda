"use client"

import { motion } from "framer-motion"
import { Megaphone, LineChart, Cpu, Users, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const solutions = [
  {
    id: "solucoes-marketing",
    icon: Megaphone,
    title: "Marketing",
    description:
      "Para empresas que precisam melhorar comunicação, aquisição, presença digital e conversão.",
    items: [
      "Auditoria de Marketing",
      "Tráfego Pago",
      "Social Media",
      "Landing Pages",
      "Posicionamento de Marca",
    ],
  },
  {
    id: "solucoes-vendas",
    icon: LineChart,
    title: "Vendas",
    description:
      "Para empresas que precisam organizar atendimento, funil, equipe comercial e acompanhamento.",
    items: [
      "Auditoria Comercial",
      "Treinamento Comercial",
      "Implementação de CRM",
      "Scripts e Playbooks",
      "Estruturação Comercial",
    ],
  },
  {
    id: "solucoes-tecnologia",
    icon: Cpu,
    title: "Tecnologia",
    description:
      "Para empresas que precisam ganhar controle, reduzir trabalho manual e tomar decisões com dados.",
    items: [
      "Sistemas Sob Medida",
      "Dashboards e Indicadores",
      "Automações",
      "IA Aplicada ao Negócio",
      "CRM e Integrações",
      "Governança de Dados",
    ],
  },
  {
    id: "solucoes-consultorias",
    icon: Users,
    title: "Consultorias",
    description:
      "Para empresas que precisam de acompanhamento estratégico para estruturar crescimento com método.",
    items: [
      "Consultoria Comercial",
      "Consultoria de Marketing",
      "Consultoria de Processos",
      "Programa Empresas de Alta Performance",
    ],
  },
]

export function Solutions() {
  return (
    <section id="solucoes" className="py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Decorative shapes */}
      <motion.div
        className="absolute top-20 left-10 w-24 lg:w-32 h-24 lg:h-32 border border-accent/10 rounded-full hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-36 lg:w-48 h-36 lg:h-48 border border-accent/10 rounded-full hidden md:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

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
            Soluções Completas
          </span>
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Soluções do{" "}
            <span className="gradient-text">Ascenda</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Cada solução pode ser contratada de forma independente ou combinada dentro de uma consultoria, 
            conforme o momento e a necessidade da empresa.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 mb-10">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              id={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group scroll-mt-24"
            >
              <div className="relative h-full p-5 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-3 lg:gap-4 mb-4 lg:mb-5">
                    <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                      <solution.icon className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>

                  {/* Items List */}
                  <ul className="space-y-2 lg:space-y-2.5">
                    {solution.items.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-center gap-2.5 group/item"
                      >
                        <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-accent/10 flex items-center justify-center group-hover/item:bg-accent group-hover/item:scale-110 transition-all duration-300">
                          <Check className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-accent group-hover/item:text-white transition-colors" />
                        </div>
                        <span className="text-foreground text-sm lg:text-base group-hover/item:text-accent transition-colors">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
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
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 lg:px-8 py-5 lg:py-6 text-sm lg:text-base group"
          >
            <Link href="#contato">
              Solicitar proposta personalizada
              <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
