"use client";

import React, { useState } from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */

const tabs = [
  { id: "faisceau", label: "Faisceau Électrique" },
  { id: "controleur", label: "Unités de Contrôle Électroniques" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const BASE = "/diagnstic et rapation ( reparation electrique )";

/* ── shared helpers ── */
function Step({
  number,
  text,
  image,
  reverse,
}: {
  number: string;
  text: React.ReactNode;
  image?: string;
  reverse?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 lg:gap-10 items-start`}
    >
      {image && (
        <div className="w-full lg:w-[45%] flex-shrink-0">
          <div className="relative h-56 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={image}
              alt={`Étape ${number}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
            <div className="absolute top-3 left-3 w-10 h-10 sm:w-12 sm:h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base shadow-lg">
              {number}
            </div>
          </div>
        </div>
      )}
      <div className="flex-1 min-w-0">
        {!image && (
          <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg mb-4">
            {number}
          </div>
        )}
        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-2">
          {text}
        </div>
      </div>
    </motion.div>
  );
}

function SubList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 ml-2 space-y-1.5 list-none">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm sm:text-base font-semibold text-gray-800 mt-4 mb-1.5">{children}</h3>
  );
}

/* ─────────────────────────────────────────────────────────────
   TAB CONTENT
───────────────────────────────────────────────────────────── */

function FaisceauContent() {
  const images = [
    `${BASE}/etape 1 ( faisceau electrique ).png`,
    `${BASE}/etape 2 ( faisceau electrique ).png`,
    `${BASE}/etape 3 ( faisceau electrique ).png`,
    `${BASE}/etape 4 ( faisceau electrique ).png`,
    `${BASE}/etape 5 ( faisceau electrique ).png`,
  ];

  return (
    <div className="space-y-10 sm:space-y-14">
      <Step number="01" image={images[0]} text={<p>Après réception du faisceau dans notre atelier , il est soigneusement nettoyé et dégraissé. Les protections sont ensuite retirées afin d'exposer avec précision les zones endommagées et de lancer le diagnostic technique.</p>} />
      <Step number="02" image={images[1]} reverse text={<p>Un contrôle de continuité est d'abord réalisé afin de valider l'intégrité du circuit électrique. Une inspection visuelle approfondie est ensuite menée pour identifier toute coupure, trace d'abrasion par frottement, brûlure ou écrasement des conducteurs. Enfin, un contrôle de l'oxydation est effectué afin de s'assurer de l'absence de corrosion interne (vert-de-gris) sous l'isolant.</p>} />
      <Step
        number="03"
        image={images[2]}
        text={
          <>
            <p>Après finalisation du diagnostic et identification des réparations possibles ainsi que des composants à remplacer, nous procédons à la remise en état du faisceau électrique. Les opérations de réparation sont réalisées selon des méthodes professionnelles adaptées aux engins de chantier et miniers, notamment les interventions suivantes :</p>
            <SectionTitle>1. Réparation des Files :</SectionTitle>
            <SubList items={["Épissure par sertissage : Réparation d'un fil coupé ou sectionné à l'aide de manchons à sertir professionnels, offrant une excellente tenue mécanique et une forte résistance aux vibrations.","Protection par gaine thermorétractable étanche : Application de gaines à double paroi adhésive pour assurer l'étanchéité contre l'humidité, la poussière et les hydrocarbures.","Reprise locale de l'isolant : Remise en état de l'isolation lorsque le cuivre n'est pas affecté.","Remplacement partiel de section : Découpe de la portion endommagée et remplacement par un conducteur neuf de même section et même spécification électrique.","Remplacement total du file obligatoire : Lorsque un ou plusieurs fils présentent une oxydation avancée du cuivre (noircissement ou vert-de-gris), des signes de surchauffe ou de brûlure, une perte de souplesse, une section non conforme après réparation, des réparations multiples sur la même ligne, ou lorsque le constructeur impose le remplacement complet."]} />
            <SectionTitle>2. Réparation des connecteurs :</SectionTitle>
            <SubList items={["Nettoyage et décontamination des broches : Élimination des traces d'oxydation légère, poussière, huile ou humidité à l'aide de produits adaptés.","Remplacement des cosses / broches : Extraction des broches endommagées à l'aide d'outils spécifiques, puis sertissage et insertion de nouvelles cosses conformes aux spécifications constructeur.","Réfection de l'étanchéité : Remplacement des joints d'étanchéité (joints toriques, joints silicone) pour garantir la protection contre l'eau, la poussière et les hydrocarbures.","Reprise du verrouillage mécanique : Vérification et remise en état des systèmes de verrouillage afin d'assurer un maintien correct du connecteur malgré les vibrations.","Remplacement du connecteur : Lorsque les connecteurs présentent une corrosion avancée des broches (piqûres, noircissement ou perte de matière), une déformation ou une casse du boîtier, une perte d'étanchéité irréversible, des traces de surchauffe ou de brûlure, ou un jeu excessif provoquant des faux contacts."]} />
          </>
        }
      />
      <Step number="04" image={images[3]} reverse text={<p>Après achèvement des opérations de réparation des organes du faisceau, le technicien procède au regroupement des conducteurs à l'aide d'un ruban adhésif électrique de qualité ou d'un ruban toilé adapté. Un blindage est ensuite réalisé par l'installation d'une gaine annelée neuve ou d'une gaine tressée anti-abrasion, afin d'assurer la protection mécanique des fils et de garantir la durabilité du faisceau.</p>} />
      <Step number="05" image={images[4]} text={<p>Le faisceau est désormais prêt à être installé sur la machine et approuvé pour la livraison au client, garantissant un fonctionnement fiable après l'installation.</p>} />
    </div>
  );
}

function ControleurContent() {
  const images = [
    `${BASE}/etape 1 ( controleur electronique ).png`,
    `${BASE}/etape 2 ( controleur electronique ).png`,
    `${BASE}/etape 3 ( controleur electronique ).png`,
    `${BASE}/etape4 ( controleur electronique ).png`,
  ];

  return (
    <div className="space-y-10 sm:space-y-14">
      <Step number="01" image={images[0]} text={<p>À la réception du calculateur dans notre atelier, son identification complète est réalisée. Une inspection visuelle du boîtier permet de détecter toute détérioration, infiltration ou corrosion. Les alimentations, masses et communications sont ensuite contrôlées . Ensuite Le calculateur est connecté à un outil de diagnostic pour la lecture des codes défauts et paramètres. Les mesures sont comparées aux spécifications constructeur afin de confirmer une défaillance interne et d'exclure un défaut du faisceau ou des capteurs.</p>} />
      <Step number="02" image={images[1]} reverse text={<p>Après ouverture du boîtier électronique, une inspection visuelle détaillée de la carte électronique est réalisée afin d'identifier d'éventuels composants brûlés ou surchauffés, des traces d'oxydation ou de corrosion, ainsi que des soudures fissurées ou défectueuses (soudures froides). Les composants endommagés sont ensuite localisés et identifiés à l'aide des schémas électroniques et de tests de composants appropriés.</p>} />
      <Step number="03" image={images[2]} text={<p>Nous intervenons directement sur le module électronique en remplaçant les composants défectueux (condensateurs, résistances, drivers, étages de puissance). Nous réparons les pistes PCB endommagées et reprenons les soudures à l'aide d'équipements professionnels de haute précision. Si nécessaire, nous reprogrammons l'ECU, flashons le firmware d'origine ou une version mise à jour, puis restaurons les paramètres de calibration et les réglages machine afin de garantir un fonctionnement fiable et conforme aux spécifications d'origine.</p>} />
      <Step number="04" image={images[3]} reverse text={<p>Après validation complète des réparations et des tests fonctionnels, nous procédons à l'assemblage final du module électronique. Chaque unité est soigneusement contrôlée, sécurisée et préparée pour l'expédition, afin d'être livrée prête à être installée et utilisée en toute confiance.</p>} />
    </div>
  );
}

const tabContent: Record<TabId, React.ReactNode> = {
  faisceau: <FaisceauContent />,
  controleur: <ControleurContent />,
};

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */

export default function ReparationElectriquePage() {
  const [activeTab, setActiveTab] = useState<TabId>("faisceau");

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <NavBar />

      {/* Hero */}
      <section className="bg-gray-900 pt-24 sm:pt-32 pb-10 sm:pb-16 px-4 sm:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-green-600/20 text-green-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Diagnostic &amp; Réparations
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Réparation Électrique
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Diagnostic et remise en état des systèmes électriques et électroniques de vos équipements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Tab Bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-2 sm:px-4 overflow-x-auto scrollbar-none">
          <div className="flex gap-0 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm font-semibold transition-colors duration-200 whitespace-nowrap ${
                  activeTab === tab.id ? "text-green-600" : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tabUnderlineElec"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-8 py-10 sm:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </section>

      <Footer />
    </main>
  );
}
