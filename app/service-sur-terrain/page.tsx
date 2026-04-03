"use client";

import React from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Clock, Wrench, Zap, ShieldCheck } from "lucide-react";

const BASE = "/service sur le terrain";

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */

const services = [
  {
    id: "assistance",
    title: "Assistance en cas de panne d'urgence",
    image: `${BASE}/assistance en cas de panne.png`,
    items: [
      "Service mobile d'intervention rapide assuré par des techniciens qualifiés pour les réparations d'urgence.",
      "Réparations sur site des moteurs, mécanismes de propulsion, systèmes hydrauliques et électriques.",
    ],
    icon: Zap,
    color: "orange",
  },
  {
    id: "hydraulique",
    title: "Réparation et diagnostic hydraulique",
    image: `${BASE}/Réparation et diagnostic hydraulique.png`,
    items: [
      "Diagnostic avancé des fuites hydrauliques, des problèmes de pression et des défaillances du système.",
      "Remise en état des composants hydrauliques (pompes, distributeurs, vérins) et ajustement précis des pressions et débits selon les paramètres constructeur.",
    ],
    icon: Wrench,
    color: "blue",
  },
];

const highlights = [
  { icon: Clock, label: "Intervention sous 24h garantie" },
  { icon: ShieldCheck, label: "Techniciens certifiés & expérimentés" },
  { icon: Wrench, label: "Équipement de diagnostic mobile" },
  { icon: Zap, label: "Remise en exploitation rapide" },
];

export default function ServiceSurTerrainPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <NavBar />

      {/* ── Hero ── */}
      <section className="relative bg-gray-900 pt-24 sm:pt-0 min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={`${BASE}/main picture of the service.png`}
            alt="Service sur le terrain"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-10 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <span className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-orange-500/25 text-orange-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Service sur le terrain
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 leading-tight">
              Les pannes arrivent.{" "}
              <span className="text-orange-400">Nous vous remettons au travail rapidement.</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">
              Les pannes imprévues affectent la performance opérationnelle. HYDRAU DEM assure des diagnostics mobiles avancés et des réparations d'urgence sur site, avec une intervention garantie sous 24 heures, pour une remise en exploitation rapide et maîtrisée.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Highlights bar ── */}
      <section className="bg-orange-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {highlights.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-white text-xs sm:text-sm font-medium leading-tight">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section title ── */}
      <section className="max-w-5xl mx-auto w-full px-4 sm:px-8 pt-12 sm:pt-16 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Nos services de réparation sur site
          </h2>
          <div className="w-12 h-1 bg-orange-500 rounded-full" />
        </motion.div>
      </section>

      {/* ── Service cards ── */}
      <section className="max-w-5xl mx-auto w-full px-4 sm:px-8 pb-16 sm:pb-20 space-y-10 sm:space-y-14 pt-8 sm:pt-10">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isReverse = index % 2 !== 0;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className={`flex flex-col ${isReverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 lg:gap-10 items-start`}
            >
              {/* Image */}
              <div className="w-full lg:w-[48%] flex-shrink-0">
                <div className="relative h-56 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 48vw"
                  />
                  {/* Number badge */}
                  <div className="absolute top-3 left-3 w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base shadow-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                {/* Icon + Title */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">{service.title}</h3>
                </div>

                {/* Bullet items */}
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm sm:text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </section>

      <Footer />
    </main>
  );
}
