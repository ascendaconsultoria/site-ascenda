"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const clients = [
  {
    name: "F3 Consult",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-e4X2MnIdtm4pVsYwXAccBTqzuAruVt.png",
  },
  {
    name: "D'Sant Móveis",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-ZpLJ6Ghz5IeNVLKCOtglhwg5c0uRAs.png",
  },
  {
    name: "MHMG",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-hqrkqlUCzttPJtl3ZmRyoxBsMHjHS1.png",
  },
  {
    name: "Atom Technologies",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-KtVdJFoGHTgUlfcO3IChPi1ZNLPF0S.png",
  },
  {
    name: "TPL Logística",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-zeI8Kw8jLTEGWJURl7Qjqn9AEVMQJx.png",
  },
  {
    name: "Sigma Produções",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-CK8lbkzGe9hSMnF9CJ3bFZvbhBj72q.png",
  },
  {
    name: "Serralheria Imperial",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-fgSBDcLENTyLay4PyJrjNG9Oq8IIkW.png",
  },
  {
    name: "Saraani",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-7bgC0wmfvvreG8A6rdvOFXbpMdQJk1.png",
  },
  {
    name: "Art Tattoo Studio",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-3M9cQMM9hk3IIY3ekXrTvz4dXglWzQ.png",
  },
  {
    name: "Delivery's",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-KdsyYogMAlRVNlI5UaAMcF5L7Wm4Gu.png",
  },
  {
    name: "LôPets",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-C82ZrPFyMLXPtN3GDR76sJYmaTXI6n.png",
  },
]

export function ClientsCarousel() {
  return (
    <section className="py-12 lg:py-16 bg-background relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground"
        >
          Empresas que confiam no Ascenda
        </motion.p>
      </div>

      {/* Carousel */}
      <div className="relative group">
        <motion.div
          className="flex gap-12 lg:gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ animationPlayState: "running" }}
        >
          {/* First set */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 h-12 lg:h-16 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={`Logo ${client.name}`}
                width={150}
                height={64}
                sizes="(max-width: 1024px) 120px, 150px"
                className="h-full w-auto max-w-[120px] lg:max-w-[150px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 h-12 lg:h-16 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={`Logo ${client.name}`}
                width={150}
                height={64}
                sizes="(max-width: 1024px) 120px, 150px"
                className="h-full w-auto max-w-[120px] lg:max-w-[150px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
