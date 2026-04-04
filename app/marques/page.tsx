"use client";

import { useState } from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Truck, Gauge, Droplets } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */

const categories = [
  {
    id: "machines",
    label: "Machines",
    icon: Truck,
    description: "Constructeurs d'engins de chantier & terrassement",
    folder: "CONSTRUCTEURS ( Machines )",
    brands: [
      { name: "Case Construction", file: "CASE CONSTRACTION.png" },
      { name: "Caterpillar", file: "CATERPILLAR.webp" },
      { name: "Doosan", file: "DOOSAN.jpg" },
      { name: "Hitachi", file: "HITACHI.jpg" },
      { name: "JCB", file: "JCB.png" },
      { name: "John Deere", file: "JOHN DEERE.png" },
      { name: "Komatsu", file: "KOMATSU.png" },
      { name: "Liebherr", file: "LIEBHERR.png" },
      { name: "Manitou", file: "MANITOU.png" },
      { name: "Sany", file: "SANY.png" },
      { name: "Volvo", file: "VOLVO.png" },
    ],
  },
  {
    id: "moteurs",
    label: "Moteurs",
    icon: Gauge,
    description: "Fabricants de moteurs industriels & thermiques",
    folder: "CONSTRUCTEURS ( Moteurs )",
    brands: [
      { name: "Caterpillar", file: "CATERPILLAR.webp" },
      { name: "Cummins", file: "CUMMINS.jfif" },
      { name: "Deutz", file: "DEUTZ.png" },
      { name: "FPT Industrial", file: "FPT.png" },
      { name: "Isuzu", file: "ISUZU.png" },
      { name: "Iveco", file: "IVECO.png" },
      { name: "John Deere", file: "JOHN DEERE.png" },
      { name: "Perkins", file: "PERKINS.png" },
      { name: "Yanmar", file: "YANMAR.png" },
    ],
  },
  {
    id: "pompes",
    label: "Pompes Hydrauliques",
    icon: Droplets,
    description: "Spécialistes en composants & pompes hydrauliques",
    folder: "CONSTRUCTEURS ( Pompes hydraulique )",
    brands: [
      { name: "HPV", file: "HPV.jpg" },
      { name: "Kawasaki", file: "KAWASAKI.png" },
      { name: "Rexroth", file: "REXROTH.png" },
      { name: "Sauer Danfoss", file: "SAUER.webp" },
    ],
  },
] as const;

type CategoryId = (typeof categories)[number]["id"];

/* ─────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────── */

function buildSrc(folder: string, file: string) {
  return `/mark/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;
}

/* ─────────────────────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
  exit: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.38, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, y: -12, scale: 0.97, transition: { duration: 0.22, ease: [0.55, 0, 1, 0.45] } },
};

function BrandCard({ name, src }: { name: string; src: string }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col items-center gap-3 cursor-default"
    >
      {/* logo area */}
      <div className="relative w-full h-20 flex items-center justify-center">
        <Image
          src={src}
          alt={name}
          fill
          className="object-contain p-1"
          sizes="(max-width: 640px) 40vw, (max-width: 1024px) 22vw, 15vw"
        />
      </div>

      {/* separator */}
      <div className="w-8 h-px bg-orange-200 group-hover:w-12 group-hover:bg-orange-400 transition-all duration-300" />

      {/* name */}
      <p className="text-xs font-semibold text-gray-500 group-hover:text-orange-600 transition-colors duration-200 text-center tracking-wide uppercase">
        {name}
      </p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */

export default function MarquesPage() {
  const [active, setActive] = useState<CategoryId>("machines");

  const current = categories.find((c) => c.id === active)!;

  return (
    <>
      <NavBar />

      <main className="min-h-screen bg-[#fafafa]">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20 px-4">
          {/* decorative orange glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-semibold tracking-widest uppercase">
                Partenaires de confiance
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                Nos Marques<br />
                <span className="text-orange-400">Partenaires</span>
              </h1>
              <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
                Nous intervenons sur les équipements des plus grands constructeurs
                mondiaux en hydraulique, mécanique et maintenance industrielle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Switcher + Grid ── */}
        <section className="max-w-6xl mx-auto px-4 py-14">

          {/* Tab switcher */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === active;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`relative flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? "bg-primary text-white border-primary shadow-lg shadow-orange-200"
                      : "bg-white text-gray-600 border-gray-200 hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-orange-400"}`} />
                  <span>{cat.label}</span>

                  {/* badge */}
                  <span
                    className={`ml-1 text-xs font-bold px-1.5 py-0.5 rounded-md ${
                      isActive ? "bg-white/20 text-white" : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {cat.brands.length}
                  </span>

                  {/* active indicator bar */}
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-primary -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Category description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={active + "-desc"}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="text-center text-gray-500 text-sm mb-10"
            >
              {current.description}
            </motion.p>
          </AnimatePresence>

          {/* Logo grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {current.brands.map((brand) => (
                <BrandCard
                  key={brand.file}
                  name={brand.name}
                  src={buildSrc(current.folder, brand.file)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      <Footer />
    </>
  );
}
