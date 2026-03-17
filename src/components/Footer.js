import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" id="nosotros">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            Dale Mate <span>CBA</span>
          </div>
          <p>
            Emprendimiento artesanal cordobés dedicado a la fabricación y venta
            de mates de calidad. Cada mate es curado con amor y dedicación para
            que tu experiencia sea única.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><a href="/#catalogo">Catálogo</a></li>
            <li><Link to="/carrito">Mi carrito</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li>Córdoba, Argentina</li>
            <li>
              <a
                href="https://wa.me/5493512002397"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>Envíos a todo el país</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Dale Mate CBA — Todos los derechos reservados</span>
        <span>Hecho con 🧉 en Córdoba</span>
      </div>
    </footer>
  );
}
