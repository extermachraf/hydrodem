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
  { id: "pompes", label: "Pompes Hydrauliques" },
  { id: "moteurs", label: "Moteurs Hydrauliques" },
  { id: "verins", label: "Vérins Hydrauliques" },
  { id: "distributeurs", label: "Distributeurs" },
] as const;

type TabId = (typeof tabs)[number]["id"];

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
      {/* Image */}
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
            <div className="absolute top-3 left-3 w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base shadow-lg">
              {number}
            </div>
          </div>
        </div>
      )}

      {/* Text */}
      <div className="flex-1 min-w-0">
        {!image && (
          <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg mb-4 flex-shrink-0">
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
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
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

function PompesContent() {
  const images = [
    "/reparation hydraulique/pomp/etape 1 ( pompe ).png",
    "/reparation hydraulique/pomp/etape 2 ( pompe ).png",
    "/reparation hydraulique/pomp/etape 3 ( pompe ).png",
    "/reparation hydraulique/pomp/etape 4 ( pompe ).png",
    "/reparation hydraulique/pomp/etape 5 ( pompe ).png",
    "/reparation hydraulique/pomp/etape 6 ( pompe ).png",
  ];

  return (
    <div className="space-y-10 sm:space-y-14">
      <Step number="01" image={images[0]} text={<p>À la réception dans notre atelier, la pompe hydraulique est inspectée visuellement afin de détecter toute fuite ou détérioration liée aux conditions sévères des chantiers et sites miniers. Nous procédons ensuite à un nettoyage et un dégraissage complets, garantissant des conditions sûres et propres avant le démontage.</p>} />
      <Step number="02" image={images[1]} reverse text={<p>La pompe hydraulique est démontée en environnement propre . Les sous-ensembles principaux (groupe rotatif, système de variation, distribution, régulation et corps de pompe) sont séparés, identifiés et organisés avec précision pour assurer un diagnostic fiable et un remontage conforme aux spécifications techniques.</p>} />
      <Step
        number="03"
        image={images[2]}
        text={
          <>
            <p>Une fois le démontage et le nettoyage effectués, nos techniciens procèdent à une expertise rigoureuse de chaque composant pour diagnostiquer l'origine de la panne et évaluer le niveau d'usure.</p>
            <SectionTitle>1. Pompes hydrauliques à pistons :</SectionTitle>
            <SubList items={["Inspection visuelle du groupe rotatif (pistons, patins, barillet)","Contrôle de la plaque de distribution (rayures, piqûres, échauffement)","Vérification de la plaque inclinée / berceau (usure et marquage)","Mesure des jeux fonctionnels (pistons, barillet, plaque)","Contrôle des roulements et paliers","Vérification des joints et surfaces d'étanchéité","Identification des composants hors tolérances constructeur"]} />
            <SectionTitle>2. Pompes hydrauliques à engrenages</SectionTitle>
            <SubList items={["Inspection visuelle des pignons (usure, arrachements, rayures)","Contrôle du corps de pompe et des flasques","Mesure des jeux radiaux et axiaux","Vérification de l'état des paliers et bagues","Contrôle des surfaces d'étanchéité","Identification des composants usés ou déformés"]} />
          </>
        }
      />
      <Step number="04" image={images[3]} reverse text={<p>Les composants usés ou endommagés sont remplacés par des pièces conformes aux spécifications constructeur. Les éléments réutilisables font l'objet d'un nettoyage de précision afin d'éliminer toute particule métallique ou contamination. Une inspection finale est ensuite réalisée avant l'assemblage, garantissant fiabilité et performance du système.</p>} />
      <Step number="05" image={images[4]} text={<p>Le remontage est réalisé en environnement propre, conformément aux procédures techniques du constructeur. Les couples de serrage sont appliqués selon les spécifications et l'alignement des composants rotatifs est rigoureusement contrôlé afin de garantir un fonctionnement fiable et durable.</p>} />
      <Step number="06" image={images[5]} reverse text={<p>La pompe est soumise à des essais de pression et de débit, incluant le contrôle du débit de fuite , afin de valider ses performances hydrauliques. La réponse des commandes et la stabilité de fonctionnement sont vérifiées, puis les réglages nécessaires sont effectués si applicable. Après validation finale, la pompe est préparée et prête à être livrée au client.</p>} />
    </div>
  );
}

function MoteursContent() {
  const images = [
    "/reparation hydraulique/etape 1 ( moteur hydraulique ).png",
    "/reparation hydraulique/etape 2 ( moteur hydraulique ).png",
    "/reparation hydraulique/etape 3 ( moteur hydraulique ).png",
    "/reparation hydraulique/etape 4 ( moteur hydraulique ).png",
  ];

  return (
    <div className="space-y-10 sm:space-y-14">
      <Step number="01" image={images[0]} text={<p>À la réception du moteur hydraulique, une inspection visuelle externe est effectuée afin d'identifier d'éventuelles fuites ou dommages. Le modèle et le numéro de série sont relevés pour assurer la traçabilité, puis le moteur est préparé en toute sécurité pour le démontage et l'expertise technique.</p>} />
      <Step number="02" image={images[1]} reverse text={<p>Le démontage est réalisé dans une zone propre et contrôlée. Les principaux composants (arbre de sortie, barillet, pistons et patins, plaque de retenue, organes de sécurité et de freinage, joints et roulements) sont séparés, puis soumis à un contrôle visuel et dimensionnel afin d'identifier les pièces usées ou endommagées.</p>} />
      <Step number="03" image={images[2]} text={<p>Les composants usés ou défectueux sont remplacés par des pièces conformes aux spécifications du constructeur. Les éléments réutilisables sont nettoyés avec précision, puis le moteur est remonté conformément aux procédures techniques du fabricant, avec contrôle du couple de serrage et de l'alignement des pièces en rotation.</p>} />
      <Step number="04" image={images[3]} reverse text={<p>Le moteur hydraulique est soumis à des essais de pression, de débit et d'étanchéité afin de valider ses performances, sa stabilité et son fonctionnement fluide. Après une inspection finale, les orifices sont protégés et le moteur est préparé pour la livraison au client.</p>} />
    </div>
  );
}

function VerinsContent() {
  const images = [
    "/reparation hydraulique/verin/etape 1 ( verin ).png",
    "/reparation hydraulique/verin/etape 2 ( verin ).png",
    "/reparation hydraulique/verin/etape 3 ( verin ).png",
    "/reparation hydraulique/verin/etape 4 ( verin ).png",
    "/reparation hydraulique/verin/etape 5 ( verin ).png",
  ];

  return (
    <div className="space-y-10 sm:space-y-14">
      <Step number="01" image={images[0]} text={<p>À la réception du vérin en provenance du chantier, notre équipe procède à un contrôle visuel rigoureux afin de détecter toute fuite, déformation ou dommage mécanique. L'identification du vérin est ensuite vérifiée pour assurer une prise en charge conforme et préparer l'intervention dans les meilleures conditions.</p>} />
      <Step
        number="02"
        image={images[1]}
        reverse
        text={
          <>
            <p>Le démontage est effectué par notre équipe en zone propre, avec l'ouverture du vérin puis l'extraction de la tige et du piston. Les composants fût, tige, piston et joints sont soigneusement séparés, nettoyés et identifiés. Chaque élément est ensuite analysé individuellement selon son état, les tolérances du constructeur et les conditions d'exploitation (chantier, mine, environnement sévère). Cette étape permet de définir précisément les opérations de réparation applicables, présentées ci-après pour chaque composant du vérin.</p>
            <SectionTitle>1. Le Fût :</SectionTitle>
            <SubList items={["Alésage et pierrage : Si l'intérieur est rayé, on procède à un réalésage (usinage intérieur) suivi d'un pierrage . Le pierrage crée ces micro-rayures croisées qui retiennent le film d'huile nécessaire à la lubrification des joints de piston.","Détensionnement : Si le fût est légèrement gonflé (suite à une surpression), l'usinage permet de redonner une circularité parfaite au tube.","Le Retubage : En cas de dégradation majeure de la paroi interne (rayures profondes, ovalisation ou corrosion interne perforante), nous procédons au retubage de l'unité. Cette opération inclut la sélection d'un tube rodé de précision et le transfert par soudure haute pression des éléments structurels"]} />
            <SectionTitle>2. La Tige :</SectionTitle>
            <SubList items={["Rectification : Si la tige présente des rayures profondes ou une légère ovalisation, elle est passée sur une rectifieuse cylindrique. On enlève quelques microns de matière pour retrouver une surface parfaitement lisse.","Chromage : Après rectification, la tige doit souvent être re-chromée (chrome dur) pour retrouver son diamètre d'origine et sa résistance à la corrosion.","Usinage : On peut ré-usiner les filetages de l'œil du vérin ou la portée du piston si ceux-ci sont écrasé ou cassé."]} />
            <SectionTitle>3. le Piston :</SectionTitle>
            <SubList items={["Usinage des cotes du piston : Si les gorges des joints sont déformées ou battues, on peut les ré-usiner pour installer des joints de côtes supérieures (oversize).","Remplacement et Usinage du Piston : On change souvent le piston carrément lors d'un retubage, car si le fût a été gravement rayé, le piston a généralement subi des transferts de matière ou une déformation thermique"]} />
          </>
        }
      />
      <Step number="03" image={images[2]} text={<p>Après la remise en état complète des composants, le vérin est remonté en appliquant strictement les couples de serrage et les normes d'alignement du constructeur. Pour garantir une fiabilité absolue avant la livraison, l'unité subit une série de tests de pression et d'étanchéité sur banc d'essai , validant ainsi la performance hydraulique et la parfaite tenue des joints sous charge maximale.</p>} />
      <Step number="04" image={images[3]} reverse text={<p>Après validation technique, nous effectuons une préparation des surfaces par dégraissage pour assurer une adhérence parfaite. Le vérin reçoit ensuite une peinture industrielle haute résistance, garantissant une finition professionnelle et une protection durable contre la corrosion en conditions extrêmes.</p>} />
      <Step number="05" image={images[4]} text={<p>Après l'application de la peinture de protection, nous effectuons un contrôle final rigoureux. Le vérin est désormais certifié et prêt à être livré pour une remise en service immédiate.</p>} />
    </div>
  );
}

function DistributeursContent() {
  const images = [
    "/reparation hydraulique/etape 1 (distrubiteur ).png",
    "/reparation hydraulique/etape 2 (distrubiteur ).png",
    "/reparation hydraulique/etape 3 (distrubiteur ).png",
    "/reparation hydraulique/etape4 (distrubiteur ).png",
  ];

  return (
    <div className="space-y-10 sm:space-y-14">
      <Step number="01" image={images[0]} text={<p>À la réception du distributeur en provenance du chantier ou du site minier, notre équipe réalise une inspection visuelle externe afin d'identifier toute fuite, fissure ou choc. Le modèle est ensuite identifié et tracé, puis le distributeur est préparé pour un démontage en environnement propre.</p>} />
      <Step number="02" image={images[1]} reverse text={<p>Après le nettoyage extérieur du distributeur par notre technicien, le démontage est réalisé en zone propre et contrôlée. Le corps, les tiroirs, ressorts, clapets, Soupapes de décharge, Cartoucheset et joints torique endommagés sont extraits, puis les composants sont nettoyés avant de subir une inspection visuelle et dimensionnelle permettant d'identifier avec précision les pièces usées ou endommagées.</p>} />
      <Step
        number="03"
        image={images[2]}
        text={
          <>
            <p>Après démontage, chaque composant est rigoureusement évalué selon les tolérances et spécifications constructeur. Cette expertise permet de définir les opérations de réparation nécessaires ou le remplacement des pièces critiques avant de procéder au remontage final. L'objectif est de garantir une parfaite conformité technique et une fiabilité opérationnelle optimale.</p>
            <SectionTitle>1. Corps de distributeur :</SectionTitle>
            <SubList items={["Nettoyage et rinçage complet des galeries hydrauliques.","Rodage ou pierrage léger des alésages de tiroirs (dans les tolérances constructeur).","Réparation des filetages.","Reprise des surfaces d'appui et d'étanchéité.","Remplacement du corps complet : en cas présence de fissures ou microfissures, d'une usure interne excessive ou de rayures hors tolérances, ainsi que de corrosion sévère ou de cavitation."]} />
            <SectionTitle>2. Tiroirs :</SectionTitle>
            <SubList items={["Polissage ou micro-rodage des surfaces.","Usinage de rattrapage (correction dimensionnelle légère).","Rechargement ou chromage de surface.","Remplacement du tiroirs : si il est voilé ou déformé, présentant des rayures profondes ou des piqûres, ainsi qu'un jeu excessif provoquant des fuites internes."]} />
            <SectionTitle>3. Ressorts :</SectionTitle>
            <SubList items={["Remplacement : La perte d'élasticité, la fatigue, la déformation ou la rupture des ressorts imposent leur remplacement."]} />
            <SectionTitle>4. Clapets anti-retour :</SectionTitle>
            <SubList items={["Rodage du siège.","Nettoyage et polissage du clapet.","remplacement : Si le siège et le clapet sont endommagés ou ont subi une déformation pouvant entraîner des fuites internes."]} />
            <SectionTitle>5. Soupapes de décharge :</SectionTitle>
            <SubList items={["Nettoyage et recalibrage.","Rodage du siège.","Remplacement des ressorts.","Remplacement : Si la soupape présente des fissures dans le corps, une instabilité de pression ou une usure sévère du siège."]} />
            <SectionTitle>6. Valve de pilotage :</SectionTitle>
            <SubList items={["Nettoyage et polissage.","Remplacement des joints.","Réglage et calibration.","Remplacement : En cas de Usure excessive , Fuites internes ou Dommages mécaniques."]} />
            <SectionTitle>7. Joints toriques :</SectionTitle>
            <SubList items={["Remplacement : Suite à une exploitation prolongée du distributeur, les joints présentent un durcissement, des coupures ou des déformations irréversibles dues aux contraintes thermiques et mécaniques, compromettant l'étanchéité du système."]} />
          </>
        }
      />
      <Step number="04" image={images[3]} reverse text={<p>Une fois le montage finalisé, le distributeur subit des essais fonctionnels rigoureux. Nous vérifions les débits, les pressions ainsi que la fluidité du coulissement des tiroirs. Après validation complète de ses performances, l'unité est certifiée prête à être livrée pour une remise en service immédiate.</p>} />
    </div>
  );
}

const tabContent: Record<TabId, React.ReactNode> = {
  pompes: <PompesContent />,
  moteurs: <MoteursContent />,
  verins: <VerinsContent />,
  distributeurs: <DistributeursContent />,
};

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */

export default function ReparationHydrauliquePage() {
  const [activeTab, setActiveTab] = useState<TabId>("pompes");

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <NavBar />

      {/* Hero */}
      <section className="bg-gray-900 pt-24 sm:pt-32 pb-10 sm:pb-16 px-4 sm:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Diagnostic &amp; Réparations
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Réparation Hydraulique
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Remise en état complète de vos composants hydrauliques par nos techniciens spécialisés.
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
                  activeTab === tab.id ? "text-orange-500" : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full"
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
