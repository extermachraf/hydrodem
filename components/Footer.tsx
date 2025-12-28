import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="relative w-64 h-24">
              {/* Using CSS filter to make the black logo white */}
              <Image
                src="/logo/logo1.svg"
                alt="Hydrodem Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-neutral-400 leading-relaxed">
              Votre partenaire de confiance pour la maintenance hydraulique et mécanique. Expertise, rapidité et fiabilité au service de votre industrie.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold">Liens Rapides</h3>
            <ul className="flex flex-col gap-4 text-neutral-400">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Avis Clients
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold">Nos Services</h3>
            <ul className="flex flex-col gap-4 text-neutral-400">
              <li className="hover:text-primary transition-colors cursor-pointer">
                Diagnostic Moteur
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Hydraulique Avancée
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Dépannage sur Site
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="flex flex-col gap-4 text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>
                  123 Zone Industrielle Sud,
                  <br />
                  Casablanca, Maroc
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+212 5 22 00 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contact@hydrodem.ma</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} Hydrodem. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
