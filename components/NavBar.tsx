"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { navbarContent } from "@/lib/navbarContent";



import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

import { MessageSquare, Menu } from "lucide-react";

export default function NavBar() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const expertiseSection = document.getElementById("expertise");
      if (expertiseSection) {
        // Trigger switch when the expertise section reaches the top area
        const threshold = expertiseSection.offsetTop - 100;
        setIsLightMode(window.scrollY > threshold);
      } else {
        // Fallback if section not found (e.g. on other pages)
        setIsLightMode(window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
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
        {navbarContent.map((item) => (
          <Link
            key={item.title}
            href={item.path}
            className={`text-sm font-medium transition-colors ${
              isLightMode
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      {/* Desktop Contact Button */}
      <div className="hidden lg:flex justify-end">
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <MessageSquare className="w-4 h-4" />
          <span>Nous contacter</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <button className={`p-2 rounded-lg transition-colors ${
             isLightMode ? "hover:bg-muted" : "hover:bg-white/20 text-white"
          }`}>
            <Menu className="w-6 h-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-3/4 sm:w-1/2">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <nav className="flex flex-col gap-4 mt-8">
            {navbarContent.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                onClick={handleLinkClick}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-muted">
              <button
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors cursor-pointer"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  handleLinkClick();
                }}
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
