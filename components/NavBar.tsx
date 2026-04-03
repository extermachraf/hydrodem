"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navbarContent } from "@/lib/navbarContent";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { MessageSquare, Menu, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

/* ── Service sub-pages shown in hover dropdown ── */
const servicePages = [
  { title: "Service sur le Terrain", href: "/service-sur-terrain" },
  { title: "Réparation Hydraulique", href: "/diagnostic-reparation/reparation-hydraulique" },
  { title: "Réparation Électrique", href: "/diagnostic-reparation/reparation-electrique" },
  { title: "Révision Moteur", href: "/diagnostic-reparation/revision-moteur" },
];

export default function NavBar() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const expertiseSection = document.getElementById("expertise");
      if (expertiseSection) {
        const threshold = expertiseSection.offsetTop - 100;
        setIsLightMode(window.scrollY > threshold);
      } else {
        setIsLightMode(window.scrollY > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When navigating to a hash from another page, scroll after mount
  useEffect(() => {
    if (isHome) {
      const hash = window.location.hash;
      if (hash) {
        const el = document.getElementById(hash.slice(1));
        if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [isHome]);

  const handleLinkClick = () => setIsOpen(false);

  /** Navigate to a path. If it's a hash link and we're not on /, go to /#hash instead */
  const handleNavClick = (path: string) => {
    if (path.startsWith("#")) {
      if (isHome) {
        const el = document.getElementById(path.slice(1));
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/${path}`);
      }
    } else {
      router.push(path);
    }
    setIsOpen(false);
  };

  /* Hover helpers — small delay so mouse moving to dropdown doesn't close it */
  const handleServicesEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setServicesHovered(true);
  };
  const handleServicesLeave = () => {
    hoverTimeout.current = setTimeout(() => setServicesHovered(false), 120);
  };

  return (
    <section
      className={`px-4 sm:px-6 py-3 flex justify-between items-center fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        isLightMode
          ? "bg-white/95 backdrop-blur-md shadow-md text-foreground"
          : "bg-transparent text-white"
      }`}
    >
      {/* Left: Logo */}
      <div className="flex justify-start">
        <div className="relative w-24 h-10">
          <Image
            src="/logo/logo1.svg"
            alt="Logo"
            fill
            priority
            className="object-contain transition-all duration-300"
          />
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-center items-center gap-6">
        {navbarContent.map((item) => {
          const isServices = item.title === "Services";

          if (isServices) {
            return (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                {/* Clickable label → goes to #services section */}
                <button
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    isLightMode
                      ? "text-foreground hover:text-primary"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.title}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesHovered ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Hover dropdown */}
                <AnimatePresence>
                  {servicesHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                      onMouseEnter={handleServicesEnter}
                      onMouseLeave={handleServicesLeave}
                    >
                      {/* Arrow */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
                      <div className="p-2">
                        {servicePages.map((page) => (
                          <Link
                            key={page.href}
                            href={page.href}
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-gray-700 font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                            {page.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          return (
            <button
              key={item.title}
              onClick={() => handleNavClick(item.path)}
              className={`text-sm font-medium transition-colors ${
                isLightMode
                  ? "text-foreground hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.title}
            </button>
          );
        })}
      </nav>

      {/* Desktop Contact Button */}
      <div className="hidden lg:flex justify-end">
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => handleNavClick("#contact")}
        >
          <MessageSquare className="w-4 h-4" />
          <span>Nous contacter</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <button
            className={`p-2 rounded-lg transition-colors ${
              isLightMode ? "hover:bg-muted" : "hover:bg-white/20 text-white"
            }`}
          >
            <Menu className="w-6 h-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-3/4 sm:w-1/2">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <nav className="flex flex-col gap-1 mt-8">
            {/* Main links */}
            {navbarContent.map((item) => (
              <button
                key={item.title}
                onClick={() => handleNavClick(item.path)}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2.5 px-2 rounded-lg hover:bg-muted"
              >
                {item.title}
              </button>
            ))}

            {/* Service sub-pages in mobile */}
            <div className="mt-1 mb-1 ml-2 pl-3 border-l-2 border-orange-200 space-y-0.5">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Services</p>
              {servicePages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  onClick={handleLinkClick}
                  className="block text-sm text-gray-600 hover:text-orange-600 transition-colors py-1.5"
                >
                  {page.title}
                </Link>
              ))}
            </div>

            <div className="pt-4 mt-2 border-t border-muted">
              <button
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors cursor-pointer"
                onClick={() => handleNavClick("#contact")}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Nous contacter</span>
              </button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
}
