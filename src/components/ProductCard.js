import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const badgeClass = (badge) => {
  if (!badge) return "";
  if (badge === "Nuevo") return "badge-new";
  if (badge === "Artesanal") return "badge-art";
  if (badge === "Exclusivo") return "badge-exc";
  return "";
};

export default function ProductCard({ product, delay = 0 }) {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div
      className="product-card"
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => navigate(`/producto/${product.id}`)}
    >
      <div className="product-card-image">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
        />
        {product.badge && (
          <span className={`product-badge ${badgeClass(product.badge)}`}>
            {product.badge}
          </span>
        )}
        <div className="product-card-overlay">
          <span className="card-overlay-btn">Ver producto →</span>
        </div>
      </div>

      <div className="product-card-body">
        <p className="product-category">{product.category}</p>
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-desc">{product.shortDesc}</p>
        <div className="product-card-footer">
          <div className="product-price">
            <span>$</span>
            {product.price.toLocaleString("es-AR")}
          </div>
          <button
            className="card-add-btn"
            onClick={handleAdd}
            title="Agregar al carrito"
            aria-label="Agregar al carrito"
          >
            {added ? "✓" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
}
