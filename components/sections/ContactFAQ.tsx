"use client";

import React, { useState } from "react";
import { Mail, ChevronDown, ChevronUp, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Où intervenez-vous pour les dépannages d'urgence ?",
    answer:
      "Nous intervenons sur tout le territoire national et dans les zones limitrophes. Nos équipes mobiles sont équipées pour se déplacer directement sur carrières, chantiers et sites industriels pour minimiser vos temps d'arrêt.",
  },
  {
    question: "Proposez-vous des pièces pour toutes les marques ?",
    answer:
      "Oui, nous disposons d'un large stock de pièces multimarques incluant Caterpillar, Komatsu, Volvo, et Liebherr. Grâce à notre réseau de partenaires, nous pouvons également commander des références spécifiques dans les meilleurs délais.",
  },
  {
    question: "Quels sont vos délais pour une révision moteur ?",
    answer:
      "Les délais varient selon la complexité de l'intervention et la disponibilité des pièces. Cependant, nous comprenons l'urgence de votre métier et nous nous engageons à effectuer un diagnostic initial sous 24-48h pour vous fournir une estimation précise.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="contact" className="py-24 px-4 sm:px-10 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Column: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col gap-8"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground leading-tight">
              Questions <br /> Fréquentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Vous avez une autre question ? Remplissez le formulaire ci-dessous et nos experts vous répondront rapidement.
            </p>
          </div>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="font-medium text-sm">
                  Votre Prénom
                </label>
                <Input
                  id="firstName"
                  placeholder="Prénom"
                  className="bg-muted/30 border-border/50 h-12 rounded-xl focus:ring-primary/20"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="font-medium text-sm">
                  Votre Nom
                </label>
                <Input
                  id="lastName"
                  placeholder="Nom"
                  className="bg-muted/30 border-border/50 h-12 rounded-xl focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-sm">
                Adresse Email
              </label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="nom@exemple.com"
                  className="bg-muted/30 border-border/50 h-12 rounded-xl pl-10 focus:ring-primary/20"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-medium text-sm">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Comment pouvons-nous vous aider ?"
                className="bg-muted/30 border-border/50 min-h-[150px] rounded-xl resize-none focus:ring-primary/20 p-4"
              />
            </div>

            <Button className="w-fit px-8 py-6 rounded-xl bg-primary text-primary-foreground font-medium text-base hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              Envoyer le message
            </Button>
          </form>
        </motion.div>

        {/* Right Column: FAQ Accordion */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col gap-5 pt-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`border rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                  isOpen
                    ? "bg-card border-primary/20 shadow-lg"
                    : "bg-background border-border hover:border-primary/30"
                }`}
              >
                <button className="w-full flex items-center justify-between p-6 text-left">
                  <span className={`font-bold text-lg ${isOpen ? "text-primary" : "text-foreground"}`}>
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-primary shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 ml-4" />
                  )}
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
