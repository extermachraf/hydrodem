"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function ReparationMoteurPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-foreground">Réparation Moteur</h1>
      </div>
      <Footer />
    </main>
  );
}
