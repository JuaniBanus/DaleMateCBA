import React from "react";
import Hero from "../components/Hero";
import Catalog from "../components/Catalog";
import Nosotros from "../components/Nosotros";

export default function Home() {
  return (
    <main>
      <Hero />
      <Catalog />
      <Nosotros />
    </main>
  );
}
