import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

const categories = ["Todos", "Mates", "Bombillas", "Sets"];

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered =
    activeFilter === "Todos"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section className="catalog" id="catalogo">
      <div className="section-header">
        <div className="section-tag">Catálogo</div>
        <h2 className="section-title">Nuestros Mates</h2>
        <p className="section-subtitle">
          Cada pieza está hecha con dedicación. Encontrá el tuyo.
        </p>
      </div>

      <div className="catalog-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="catalog-grid">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
