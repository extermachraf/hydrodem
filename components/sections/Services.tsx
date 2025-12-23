"use client";

import React from "react";
import Image from "next/image";
import { Wrench, Truck, Package } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Diagnostic & Réparations",
      description: "Reconstruction moteurs et organes hydrauliques.",
      image: "/sections/service_repair.png",
      icon: Wrench,
    },
    {
      title: "Service sur le Terrain",
      description: "Assistance d'urgence mobile et dépannage sur site.",
      image: "/sections/service_field.png",
      icon: Truck,
    },
    {
      title: "Pièces Détachées",
      description: "Large stock de composants spécialisés, filtres et fluides.",
      image: "/sections/service_parts.png",
      icon: Package,
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-10 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground leading-tight">
            Optimisez vos opérations avec <br className="hidden sm:block" /> nos services sur mesure.
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez nos solutions spécialisées conçues pour améliorer chaque aspect de votre maintenance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative h-[500px] w-full rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Top Badge */}
                 <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-semibold tracking-wide uppercase">Nos Services</span>
                 </div>

                {/* Content Box */}
                <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg transform transition-transform duration-500 group-hover:-translate-y-2 border border-border/50">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
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
