"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight, Zap, Cog, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DiagnosticPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const cards = [
  {
    id: "revision-moteur",
    title: "Révision Moteur",
    description: "Révision préventive et entretien approfondi pour garantir la fiabilité et la longévité de vos moteurs.",
    icon: RotateCcw,
    href: "/diagnostic-reparation/revision-moteur",
    images: [
      "/diagnistic et reparation/photo revision moteur.png",
    ],
    accent: "#f97316",
    accentLight: "#fff7ed",
    accentText: "#ea580c",
  },
  {
    id: "reparation-hydraulique",
    title: "Réparation Hydraulique",
    description: "Remise en état complète de vos circuits et composants hydrauliques : pompes, vérins, distributeurs et moteurs.",
    icon: Cog,
    href: "/diagnostic-reparation/reparation-hydraulique",
    images: [
      "/diagnistic et reparation/moteur hydraulique ( reparation hydraulique ).png",
      "/diagnistic et reparation/pompe hydraulique ( reparation hydraulique ).png",
      "/diagnistic et reparation/verin hydraulique principal ( reparation hydraulique ).png",
      "/diagnistic et reparation/distrubiteur hydraulique ( reparations hydraulique ).png",
    ],
    accent: "#3b82f6",
    accentLight: "#eff6ff",
    accentText: "#2563eb",
  },
  {
    id: "reparation-electrique",
    title: "Réparation Électrique",
    description: "Diagnostic et remise en état des systèmes électriques et électroniques de vos équipements.",
    icon: Zap,
    href: "/diagnostic-reparation/reparation-electrique",
    images: [
      "/diagnistic et reparation/controleur electronique ( reparation electrique ).png",
      "/diagnistic et reparation/faisceau électrique ( reparation electrique ).png",
    ],
    accent: "#10b981",
    accentLight: "#ecfdf5",
    accentText: "#059669",
  },
];

function ServiceCard({ card, index, onClose }: {
  card: typeof cards[number];
  index: number;
  onClose: () => void;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const Icon = card.icon;

  useEffect(() => {
    if (card.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % card.images.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [card.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.1 + index * 0.12, ease: "easeOut" }}
      className="group relative flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-white border border-gray-100"
    >
      {/* Image Carousel */}
      <div className="relative h-44 sm:h-52 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={card.images[currentImage]}
              alt={card.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Icon badge */}
        <div
          className="absolute top-3 left-3 w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
          style={{ backgroundColor: card.accent }}
        >
          <Icon className="w-4 h-4 text-white" />
        </div>

        {/* Image dots */}
        {card.images.length > 1 && (
          <div className="absolute bottom-3 right-3 flex gap-1.5">
            {card.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: i === currentImage ? "#fff" : "rgba(255,255,255,0.45)",
                  transform: i === currentImage ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-6 gap-3">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 leading-tight">
            {card.title}
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            {card.description}
          </p>
        </div>

        <div className="mt-auto pt-1">
          <Link
            href={card.href}
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 hover:gap-3"
            style={{
              backgroundColor: card.accentLight,
              color: card.accentText,
            }}
          >
            <span>Découvrir</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: card.accent }}
      />
    </motion.div>
  );
}

export default function DiagnosticPopup({ isOpen, onClose }: DiagnosticPopupProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Modal wrapper — centers vertically, leaves room for small screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 24 }}
            transition={{ type: "spring", damping: 28, stiffness: 320, mass: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[92vh]">

              {/* Header — fixed inside the modal */}
              <div className="flex items-center justify-between px-4 sm:px-7 py-3 sm:py-5 border-b border-gray-100 flex-shrink-0">
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold text-gray-900">Diagnostic &amp; Réparations</h2>
                  <p className="text-gray-500 text-xs sm:text-sm mt-0.5">Choisissez le service adapté à vos besoins</p>
                </div>
                <button
                  onClick={onClose}
                  className="ml-3 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Cards — scrollable on small screens */}
              <div className="overflow-y-auto p-3 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
                  {cards.map((card, index) => (
                    <ServiceCard
                      key={card.id}
                      card={card}
                      index={index}
                      onClose={onClose}
                    />
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
