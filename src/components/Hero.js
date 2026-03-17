import React from "react";
import { Link } from "react-router-dom";

const HeroMateSVG = () => (
  <svg
    viewBox="0 0 320 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="hero-mate-svg"
  >
    <defs>
      {/* Cuerpo marrón */}
      <radialGradient id="bodyGrad" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#6b3a1f" />
        <stop offset="40%" stopColor="#3d1e0a" />
        <stop offset="100%" stopColor="#1a0a03" />
      </radialGradient>
      {/* Reflejo especular tenue */}
      <radialGradient id="bodyGlow" cx="30%" cy="25%" r="40%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.10)" />
        <stop offset="60%" stopColor="rgba(255,255,255,0.02)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </radialGradient>
      {/* Sombra lateral derecha */}
      <linearGradient id="bodyShadow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(0,0,0,0)" />
        <stop offset="60%" stopColor="rgba(0,0,0,0)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0.55)" />
      </linearGradient>
      {/* Aro plateado/níquel */}
      <linearGradient id="rimGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f0f0ec" />
        <stop offset="20%" stopColor="#c8c8c0" />
        <stop offset="50%" stopColor="#a0a098" />
        <stop offset="80%" stopColor="#c0c0b8" />
        <stop offset="100%" stopColor="#787870" />
      </linearGradient>
      <linearGradient id="rimShine" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
        <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </linearGradient>
      {/* Bombilla acero */}
      <linearGradient id="bombGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#606870" />
        <stop offset="30%" stopColor="#b0bcc0" />
        <stop offset="55%" stopColor="#d8e4e8" />
        <stop offset="100%" stopColor="#788088" />
      </linearGradient>
      {/* Sombra suelo */}
      <radialGradient id="floorShadow" cx="50%" cy="50%">
        <stop offset="0%" stopColor="rgba(0,0,0,0.25)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </radialGradient>
      {/* Interior boca */}
      <radialGradient id="innerGrad" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#2a1408" />
        <stop offset="100%" stopColor="#080401" />
      </radialGradient>
    </defs>

    {/* Sombra en el suelo */}
    <ellipse cx="160" cy="376" rx="85" ry="10" fill="url(#floorShadow)" />

    {/* ── CUERPO PRINCIPAL (globular) ── */}
    <path
      d="
        M 160 362
        C 220 362, 264 328, 268 282
        C 272 240, 258 208, 244 190
        C 232 174, 230 168, 224 158
        C 218 148, 208 142, 194 140
        L 126 140
        C 112 142, 102 148, 96 158
        C 90 168, 88 174, 76 190
        C 62 208, 48 240, 52 282
        C 56 328, 100 362, 160 362 Z
      "
      fill="url(#bodyGrad)"
    />
    {/* Reflejo especular */}
    <path
      d="
        M 160 362
        C 220 362, 264 328, 268 282
        C 272 240, 258 208, 244 190
        C 232 174, 230 168, 224 158
        C 218 148, 208 142, 194 140
        L 126 140
        C 112 142, 102 148, 96 158
        C 90 168, 88 174, 76 190
        C 62 208, 48 240, 52 282
        C 56 328, 100 362, 160 362 Z
      "
      fill="url(#bodyGlow)"
    />
    {/* Sombra lateral */}
    <path
      d="
        M 160 362
        C 220 362, 264 328, 268 282
        C 272 240, 258 208, 244 190
        C 232 174, 230 168, 224 158
        C 218 148, 208 142, 194 140
        L 126 140
        C 112 142, 102 148, 96 158
        C 90 168, 88 174, 76 190
        C 62 208, 48 240, 52 282
        C 56 328, 100 362, 160 362 Z
      "
      fill="url(#bodyShadow)"
    />

    {/* ── ARO PLATEADO ORNAMENTAL ── */}
    {/* Cuerpo del aro */}
    <path
      d="M 88 140 L 232 140 L 236 168 L 84 168 Z"
      fill="url(#rimGrad)"
    />

    {/* Patrón ornamental - arcos y flores grabadas */}
    {/* Fila superior: arcos */}
    {[95, 113, 131, 149, 167, 185, 203, 219].map((x, i) => (
      <path
        key={`arc-${i}`}
        d={`M ${x} 141 Q ${x + 7} 148 ${x + 14} 141`}
        stroke="rgba(60,60,50,0.45)"
        strokeWidth="1"
        fill="none"
      />
    ))}
    {/* Fila inferior: arcos invertidos */}
    {[95, 113, 131, 149, 167, 185, 203, 219].map((x, i) => (
      <path
        key={`arci-${i}`}
        d={`M ${x} 167 Q ${x + 7} 160 ${x + 14} 167`}
        stroke="rgba(60,60,50,0.45)"
        strokeWidth="1"
        fill="none"
      />
    ))}
    {/* Puntos decorativos centrales */}
    {[102, 120, 138, 156, 174, 192, 210, 226].map((x, i) => (
      <circle
        key={`dot-${i}`}
        cx={x}
        cy={154}
        r={1.8}
        fill="rgba(50,50,40,0.40)"
      />
    ))}
    {/* Líneas verticales entre motivos */}
    {[109, 127, 145, 163, 181, 199, 217].map((x, i) => (
      <line
        key={`vl-${i}`}
        x1={x}
        y1={141}
        x2={x}
        y2={167}
        stroke="rgba(50,50,40,0.22)"
        strokeWidth="0.8"
      />
    ))}

    {/* Brillo superior del aro */}
    <path
      d="M 88 140 L 232 140 L 232 150 L 88 150 Z"
      fill="url(#rimShine)"
    />
    {/* Línea brillante superior */}
    <line
      x1="88"
      y1="140"
      x2="232"
      y2="140"
      stroke="rgba(255,255,255,0.70)"
      strokeWidth="1.5"
    />
    {/* Línea sombra inferior */}
    <line
      x1="84"
      y1="168"
      x2="236"
      y2="168"
      stroke="rgba(30,30,25,0.60)"
      strokeWidth="1.5"
    />

    {/* ── BOCA / INTERIOR ── */}
    <ellipse cx="160" cy="140" rx="72" ry="11" fill="url(#innerGrad)" />
    <ellipse cx="160" cy="140" rx="60" ry="8" fill="#0a0a0a" />
    <ellipse cx="147" cy="138" rx="20" ry="4" fill="rgba(255,255,255,0.04)" />

    {/* ── BOMBILLA ── */}
    {/* Sombra/contorno */}
    <path
      d="M 184 137 Q 210 100 224 62 Q 230 44 232 30"
      stroke="rgba(30,35,40,0.70)"
      strokeWidth="9"
      strokeLinecap="round"
      fill="none"
    />
    {/* Tubo acero */}
    <path
      d="M 184 137 Q 210 100 224 62 Q 230 44 232 30"
      stroke="url(#bombGrad)"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
    {/* Reflejo en tubo */}
    <path
      d="M 183 136 Q 209 99 223 61 Q 229 43 231 29"
      stroke="rgba(255,255,255,0.35)"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />

    {/* Argolla plateada de conexión */}
    <ellipse cx="185" cy="137" rx="9" ry="5.5" fill="#888880" />
    <ellipse cx="185" cy="136" rx="7" ry="3.8" fill="#d0d0c8" />
    <ellipse cx="184" cy="135" rx="4" ry="2" fill="rgba(255,255,255,0.30)" />

    {/* Filtro / punta superior */}
    <ellipse cx="232" cy="28" rx="10" ry="6.5" fill="#606870" />
    <ellipse cx="232" cy="26" rx="8" ry="4.5" fill="#b0bcc0" />
    <ellipse cx="231" cy="25" rx="4.5" ry="2.5" fill="rgba(255,255,255,0.28)" />
    {/* Agujeritos del filtro */}
    {[
      [229, 27],
      [233, 27],
      [231, 24],
    ].map(([px, py], i) => (
      <circle key={`h-${i}`} cx={px} cy={py} r={1} fill="rgba(0,0,0,0.45)" />
    ))}

    {/* ── VAPOR ── */}
    <path
      d="M 136 133 Q 131 116 136 99 Q 141 82 136 65"
      stroke="rgba(210,210,210,0.22)"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M 153 131 Q 148 112 153 95 Q 158 78 153 61"
      stroke="rgba(210,210,210,0.16)"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-pattern" />
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span>🧉</span> Mates de calidad en Córdoba
          </div>
          <h1 className="hero-title">
            El mate que
            <br />
            <em>siempre quisiste</em>
            <br />
            tener
          </h1>
          <p className="hero-subtitle">
            Mates seleccionados, bombillas de acero y sets completos. Elegidos
            con criterio en Córdoba, para que cada sorbo sea una experiencia.
          </p>
          <div className="hero-actions">
            <a href="#catalogo" className="btn-primary">
              Ver catálogo
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <Link to="/carrito" className="btn-secondary">
              Mi carrito
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>+100</strong>
              <span>Mates vendidos</span>
            </div>
            <div className="hero-stat">
              <strong>100%</strong>
              <span>Seleccionado</span>
            </div>
            <div className="hero-stat">
              <strong>CBA</strong>
              <span>Hecho en Córdoba</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <HeroMateSVG />
        </div>
      </div>
    </section>
  );
}
