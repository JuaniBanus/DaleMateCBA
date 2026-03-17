import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const MateSVGMini = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="navbar-logo-icon">
    <ellipse cx="30" cy="38" rx="18" ry="16" fill="#8b4513" />
    <ellipse cx="30" cy="38" rx="18" ry="16" fill="url(#g1)" />
    <rect x="20" y="23" width="20" height="5" rx="2.5" fill="#c0a070" />
    <rect x="22" y="21" width="16" height="4" rx="2" fill="#d4b896" />
    <path d="M32 21 Q36 12 40 8" stroke="#1e3d1e" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="28" cy="16" r="5" fill="#e8a020" opacity="0.9" />
    <line x1="22" y1="11" x2="20" y2="8" stroke="#e8a020" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="9"  x2="23" y2="6" stroke="#e8a020" strokeWidth="2" strokeLinecap="round" />
    <line x1="27" y1="8"  x2="27" y2="5" stroke="#e8a020" strokeWidth="2" strokeLinecap="round" />
    <line x1="30" y1="9"  x2="31" y2="6" stroke="#e8a020" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="14" x2="17" y2="14" stroke="#e8a020" strokeWidth="2" strokeLinecap="round" />
    <defs>
      <radialGradient id="g1" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#c4722a" />
        <stop offset="100%" stopColor="#6b2f0a" />
      </radialGradient>
    </defs>
  </svg>
);

export default function Navbar() {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="navbar-logo">
        <MateSVGMini />
        <div className="navbar-logo-text">
          <span>Dale Mate</span>
          <span>CBA</span>
        </div>
      </Link>

      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><a href="/#catalogo">Catálogo</a></li>
        <li><a href="/#nosotros">Nosotros</a></li>
      </ul>

      <Link to="/carrito" className="navbar-cart" aria-label="Carrito">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        {totalItems > 0 && (
          <span className="cart-badge" key={totalItems}>{totalItems}</span>
        )}
      </Link>
    </nav>
  );
}
