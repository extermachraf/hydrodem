"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DiagnosticShowcaseProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DiagnosticShowcase({ isOpen, onClose }: DiagnosticShowcaseProps) {
  const [activeTab, setActiveTab] = useState<"verin" | "moteur">("verin");

  const verinSteps = [
    {
      image: "/diagno/verin before opening.png",
      title: "Analyse Initiale",
      description: "Analyse initiale de l'état extérieur et détection des fuites visibles. On identifie le problème avant d'agir.",
      step: "01"
    },
    {
      image: "/diagno/verin opened.png",
      title: "Ouverture Méthodique",
      description: "Ouverture méthodique. C'est ici que les dommages internes — joints usés ou tiges rayées — sont mis à nu.",
      step: "02"
    },
    {
      image: "/diagno/verin being repared.png",
      title: "Réparation Précise",
      description: "Installation de joints haute performance, et remplacement des pièces défectueuses (piston, tige, fût) pour une étanchéité totale et durable.",
      step: "03"
    },
    {
      image: "/diagno/verin being painted.png",
      title: "Finition Professionnelle",
      description: "Protection anticorrosion et esthétique professionnelle. Votre équipement retrouve son aspect neuf.",
      step: "04"
    },
    {
      image: "/diagno/verin to be delivred.png",
      title: "Contrôle Final",
      description: "Contrôle final validé. Votre vérin est prêt à reprendre le travail, livré en toute sécurité.",
      step: "05"
    }
  ];

  const moteurSteps = [
    {
      image: "/moteur/engine before.png",
      title: "Démontage du Moteur",
      description: "Le moteur est entièrement démonté afin d'accéder à chaque composant interne.",
      step: "01"
    },
    {
      image: "/moteur/engine dianostique.png",
      title: "Inspection des Pièces",
      description: "Toutes les pièces sont nettoyées, contrôlées et mesurées pour détecter l'usure ou les défauts.",
      step: "02"
    },
    {
      image: "/moteur/engine dianostique.png",
      title: "Préparation des Composants",
      description: "Les pièces conformes sont reconditionnées, les pièces défectueuses sont remplacées.",
      step: "03"
    },
    {
      image: "/moteur/Engine being build.png",
      title: "Remontage du Moteur",
      description: "Le moteur est remonté avec précision, dans le respect des tolérances et des procédures techniques.",
      step: "04"
    },
    {
      image: "/moteur/Engine being build.png",
      title: "Contrôles Finaux",
      description: "Des vérifications finales et démarrage du moteur sont effectués pour garantir le bon fonctionnement et la fiabilité.",
      step: "05"
    },
    {
      image: "/moteur/Engine fully rebuid and being painted.png",
      title: "Peinture & Finition",
      description: "Le moteur est peint pour assurer une protection durable et une finition professionnelle.",
      step: "06"
    },
    {
      image: "/moteur/Engine fully rebuid and being painted.png",
      title: "Prêt à la Livraison",
      description: "Le moteur est entièrement reconstruit, finalisé et prêt à être livré au client.",
      step: "07"
    }
  ];

  const steps = activeTab === "verin" ? verinSteps : moteurSteps;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Main Container - Slides up from bottom */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ 
              type: "spring", 
              damping: 30, 
              stiffness: 300,
              mass: 0.8
            }}
            className="fixed -bottom-20 left-10 right-10 z-50 bg-white rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-10 px-6 py-3">
              <div className="flex items-center justify-between max-w-7xl mx-auto gap-4">
                {/* Left: Title and Tab Switcher */}
                <div className="flex items-center gap-6 flex-1">
                  <div className="flex-shrink-0">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Diagnostic & Réparation
                    </h2>
                    <p className="text-gray-600 text-xs mt-0.5">
                      {activeTab === "verin" 
                        ? "Expertise en 5 étapes"
                        : "Reconstruction en 7 étapes"}
                    </p>
                  </div>

                  {/* Tab Switcher */}
                  <div className="hidden sm:flex gap-1 bg-gray-100 p-1 rounded-lg">
                    <button
                      onClick={() => setActiveTab("verin")}
                      className={`relative px-4 py-1.5 rounded-md text-xs font-semibold transition-all duration-300 ${
                        activeTab === "verin"
                          ? "text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {activeTab === "verin" && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-orange-500 rounded-md"
                          transition={{ type: "spring", duration: 0.5 }}
                        />
                      )}
                      <span className="relative z-10">Vérins Hydrauliques</span>
                    </button>
                    <button
                      onClick={() => setActiveTab("moteur")}
                      className={`relative px-4 py-1.5 rounded-md text-xs font-semibold transition-all duration-300 ${
                        activeTab === "moteur"
                          ? "text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {activeTab === "moteur" && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-orange-500 rounded-md"
                          transition={{ type: "spring", duration: 0.5 }}
                        />
                      )}
                      <span className="relative z-10">Moteurs</span>
                    </button>
                  </div>
                </div>

                {/* Right: Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Mobile Tab Switcher */}
              <div className="flex sm:hidden gap-1 bg-gray-100 p-1 rounded-lg mt-3">
                <button
                  onClick={() => setActiveTab("verin")}
                  className={`relative flex-1 px-4 py-1.5 rounded-md text-xs font-semibold transition-all duration-300 ${
                    activeTab === "verin"
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {activeTab === "verin" && (
                    <motion.div
                      layoutId="activeTabMobile"
                      className="absolute inset-0 bg-orange-500 rounded-md"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">Vérins</span>
                </button>
                <button
                  onClick={() => setActiveTab("moteur")}
                  className={`relative flex-1 px-4 py-1.5 rounded-md text-xs font-semibold transition-all duration-300 ${
                    activeTab === "moteur"
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {activeTab === "moteur" && (
                    <motion.div
                      layoutId="activeTabMobile"
                      className="absolute inset-0 bg-orange-500 rounded-md"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">Moteurs</span>
                </button>
              </div>
            </div>

            {/* Content - Scrollable */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)] px-4 sm:px-6 py-8">
              <div key={activeTab} className="max-w-7xl mx-auto space-y-12 pb-32">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.1 + index * 0.1,
                      ease: "easeOut"
                    }}
                    className={`flex flex-col ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-8 items-center`}
                  >
                    {/* Image */}
                    <div className="w-full lg:w-1/2 relative">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl group"
                      >
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Step Number Badge */}
                        <div className="absolute top-4 left-4 bg-orange-500 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                          {step.step}
                        </div>
                      </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-4">
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.2 + index * 0.1 
                        }}
                      >
                        <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-3">
                          Étape {step.step}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>

                      {/* Progress Indicator */}
                      {index < steps.length - 1 && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ 
                            duration: 0.8, 
                            delay: 0.4 + index * 0.1 
                          }}
                          className="h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full origin-left lg:hidden"
                        />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
