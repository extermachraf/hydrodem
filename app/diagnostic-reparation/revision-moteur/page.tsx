"use client";

import React from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────── */

const BASE = "/diagnostic et reparation ( revision moteur )";

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
            <div className="absolute top-3 left-3 w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base shadow-lg">
              {number}
            </div>
          </div>
        </div>
      )}
      <div className="flex-1 min-w-0">
        {!image && (
          <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg mb-4">
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
   PAGE
───────────────────────────────────────────────────────────── */

export default function RevisionMoteurPage() {
  const images = [
    `${BASE}/etape 1.png`,
    `${BASE}/etape 2.png`,
    `${BASE}/etape 3.png`,
    `${BASE}/etape 4.png`,
    `${BASE}/etape 5.png`,
    `${BASE}/etape 6.png`,
  ];

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
              Révision Moteur
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Révision préventive et entretien approfondi pour garantir la fiabilité et la longévité de vos moteurs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-8 py-10 sm:py-16 space-y-10 sm:space-y-14">

        <Step number="01" image={images[0]} text={<p>Le moteur est reçu depuis le chantier ou le site minier, après avoir été exposé à des conditions de travail extrêmes. Nous réalisons immédiatement une inspection visuelle initiale afin d'évaluer et de documenter précisément son état avant toute intervention.</p>} />

        <Step number="02" image={images[1]} reverse text={<p>Après réception , nous procédons à un nettoyage extérieur complet du moteur . Une fois que le moteur propre et sécurisé, nous réalisons un démontage complet, permettant d'accéder à l'ensemble des composants et de préparer une inspection technique approfondie .</p>} />

        <Step
          number="03"
          image={images[2]}
          text={
            <>
              <p>Après le démontage complet du moteur, nous procédons à la rectification et à l'usinage des organes fixes et mobiles, en fonction de leur état et conformément aux tolérances du constructeur.</p>
              <SectionTitle>1. Bloc moteur :</SectionTitle>
              <SubList items={["Surfaçage du plan de joint : usinage de la face supérieure du bloc afin d'assurer une planéité parfaite et une étanchéité optimale du joint de culasse.","Alésage et déglaçage : Pour les blocs moteurs sans chemises ou équipés de chemises sèches, l'opération consiste en un réalésage précis des cylindres pour corriger tout défaut d'ovalisation, suivi d'un honing (ou pierrage) final destiné à créer des micro-rayures croisées indispensables à une lubrification optimale.","Rectification des portées de chemises : pour les moteurs à chemises humides, réglage précis du dépassement des chemises.","Alésage de la ligne d'arbre (paliers principaux) : rectification des logements du vilebrequin afin de garantir un alignement parfait."]} />
              <SectionTitle>2. La culasse :</SectionTitle>
              <SubList items={["Épreuve (Test de pression) : Avant tout usinage, on met la culasse sous pression dans l'eau chaude pour détecter d'éventuelles fissures internes.","Surfaçage : Rectification de la face d'appui pour une étanchéité optimale.","Usinage des sièges de soupapes : On retaille les angles des sièges pour que la soupape ferme hermétiquement.","Remplacement des guides de soupapes : On extrait les vieux guides et on en presse de nouveaux pour supprimer le jeu latéral des soupapes."]} />
              <SectionTitle>3. Le Vilebrequin :</SectionTitle>
              <SubList items={["Rectification des manetons et tourillons : Si le vilebrequin est marqué, on l'usine à une cote de réparation précise (ex: -0.25mm, -0.50mm).","Polissage : On polit les surfaces de friction pour réduire l'usure des coussinets.","Équilibrage dynamique : Pour éviter les vibrations qui pourraient casser le moteur à haut régime."]} />
              <SectionTitle>4. Les Bielles :</SectionTitle>
              <SubList items={["Équerraie : On vérifie que les bielles ne sont pas tordue ou vrillée.","Remplacement des bagues de pied de bielle : Usinage de précision pour l'axe du piston.","Réfection de la tête de bielle : Si le logement du coussinet est devenu ovale."]} />
            </>
          }
        />

        <Step number="04" image={images[3]} reverse text={<p>Après un nettoyage industriel et un décalaminage intégral des composants, le moteur fait l'objet d'un contrôle de propreté rigoureux avant remontage. L'assemblage de l'équipage mobile et du haut moteur est réalisé conformément aux spécifications constructeur, incluant le respect strict des couples de serrage, des jeux de fonctionnement et le calage synchrone de la distribution et de l'injection.</p>} />

        <Step number="05" image={images[4]} text={<p>Une fois le moteur entièrement assemblé, nous procédons à un premier démarrage contrôlé afin de vérifier les pressions d'huile et de carburant, les températures de fonctionnement ainsi que l'absence de bruits ou de vibrations anormales. Après validation des réglages finaux et des contrôles, le moteur est préparé pour la finition : les surfaces sont traitées puis peintes afin d'assurer une protection durable.</p>} />

        <Step number="06" image={images[5]} reverse text={<p>Après une inspection finale certifiant que le moteur est prêt à l'exploitation, l'unité est conditionnée sur palette sécurisée pour sa mise à disposition. Cette étape de préparation à la livraison garantit l'intégrité du matériel jusqu'à sa réception par le client.</p>} />

      </section>

      <Footer />
    </main>
  );
}
