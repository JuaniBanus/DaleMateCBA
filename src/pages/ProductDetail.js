import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function Carousel({ images, name }) {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (transitioning || index === current) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setTransitioning(false);
      }, 180);
    },
    [current, transitioning]
  );

  const prev = () => goTo((current - 1 + images.length) % images.length);
  const next = () => goTo((current + 1) % images.length);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-main">
        <img
          key={current}
          src={images[current]}
          alt={`${name} - vista ${current + 1}`}
          className={transitioning ? "entering" : "active"}
        />
        {images.length > 1 && (
          <>
            <button className="carousel-arrow prev" onClick={prev} aria-label="Anterior">
              ‹
            </button>
            <button className="carousel-arrow next" onClick={next} aria-label="Siguiente">
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="carousel-thumbnails">
          {images.map((src, i) => (
            <div
              key={i}
              className={`carousel-thumb ${i === current ? "active" : ""}`}
              onClick={() => goTo(i)}
            >
              <img src={src} alt={`${name} miniatura ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!product) {
    return (
      <div className="product-detail-page" style={{ textAlign: "center" }}>
        <h2>Producto no encontrado</h2>
        <button className="btn-primary" style={{ marginTop: "2rem" }} onClick={() => navigate("/")}>
          Volver al inicio
        </button>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="product-detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Volver al catálogo
      </button>

      <div className="product-detail-grid">
        <Carousel images={product.images} name={product.name} />

        <div className="product-info">
          <p className="product-info-category">{product.category}</p>
          {product.badge && (
            <span
              className="product-badge"
              style={{ position: "static", display: "inline-block", marginBottom: "0.75rem" }}
            >
              {product.badge}
            </span>
          )}
          <h1 className="product-info-name">{product.name}</h1>

          <div className="product-info-price">
            <small>$</small>
            {product.price.toLocaleString("es-AR")}
          </div>

          <p className="product-info-desc">{product.description}</p>

          <div className="product-features">
            <h4>Características</h4>
            <ul className="features-list">
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="quantity-selector">
            <button
              className="qty-btn"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Reducir cantidad"
            >
              −
            </button>
            <span className="qty-value">{quantity}</span>
            <button
              className="qty-btn"
              onClick={() => setQuantity((q) => q + 1)}
              aria-label="Aumentar cantidad"
            >
              +
            </button>
          </div>

          <button
            className={`add-to-cart-btn ${added ? "added" : ""}`}
            onClick={handleAdd}
          >
            {added ? (
              <>✓ Agregado al carrito</>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                Agregar al carrito
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
