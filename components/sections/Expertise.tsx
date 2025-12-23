"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Zap, HardHat, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Expertise() {
  const features = [
    {
      title: "Expertise de Confiance",
      description:
        "Nos professionnels chevronnés comprennent les complexités des systèmes hydrauliques et s'engagent à fournir des résultats exceptionnels.",
      icon: ShieldCheck,
      link: "#",
    },
    {
      title: "Innovation au Cœur",
      description:
        "Nous prospérons grâce à l'innovation. Des technologies de diagnostic avancées aux stratégies avant-gardistes, nous repoussons constamment les limites.",
      icon: Zap,
      link: "#",
    },
    {
      title: "La Sécurité Avant Tout",
      description:
        "La sécurité est notre priorité absolue. Nous respectons les normes de sécurité les plus strictes pour protéger nos travailleurs, nos partenaires et vos machines.",
      icon: HardHat,
      link: "#",
    },
  ];

  return (
    <section id="expertise" className="py-20 px-2 sm:px-10 bg-background relative overflow-hidden">
      {/* Centered Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground leading-tight">
          Débloquez des Opportunités et <br className="hidden sm:block" /> Maximisez votre Production
        </h2>
        <p className="text-muted-foreground text-lg">
          Découvrez comment nous tirons parti d'une technologie de pointe et d'une expertise industrielle pour garantir votre succès.
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row items-stretch sm:gap-0 gap-10 px-10">
        {/* Left: Image with Badge */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="sm:w-[44%] w-full relative min-h-[500px] h-auto rounded-3xl overflow-hidden group"
        >
          <Image
            src="/sections/expertise.png"
            alt="Expertise Industrielle"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Badge */}
          <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Pourquoi nous choisir</span>
          </div>
        </motion.div>

        {/* Right: Content Cards */}
        <div className="sm:w-[56%] w-full flex flex-col gap-6 sm:pl-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                key={index}
                className="bg-card border border-border p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:border-primary/50 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      <span>En savoir plus</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
