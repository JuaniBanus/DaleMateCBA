import React from "react";

export default function Nosotros() {
  return (
    <section className="nosotros" id="nosotros">
      <div className="nosotros-container">

        <div className="nosotros-image-col">
          <div className="nosotros-image-wrapper">
            <img
              src="/micaela.jpg"
              alt="Micaela Vittore, fundadora de Dale Mate CBA"
              className="nosotros-photo"
            />
            <div className="nosotros-image-badge">
              <span>🧉</span>
              <span>Fundado en julio 2025</span>
            </div>
          </div>
        </div>

        <div className="nosotros-content">
          <div className="section-tag">Nuestra historia</div>
          <h2 className="section-title nosotros-title">
            Quiénes somos
          </h2>

          <p className="nosotros-lead">
            Dale Mate nació en <strong>2025</strong> como el sueño de Micaela de transformar algo tan
            cotidiano como el mate en una experiencia con estilo, identidad y personalidad.
          </p>

          <p className="nosotros-text">
            Lo que comenzó como un pequeño emprendimiento impulsado por la pasión y la creatividad,
            hoy busca acompañar cada ronda de mates con productos pensados para quienes disfrutan
            compartir, regalar y vivir el ritual del mate de una forma única.
          </p>

          <p className="nosotros-text">
            En Dale Mate creemos que el mate es mucho más que una bebida: es encuentro, charla,
            momentos que se comparten y recuerdos que se construyen. Por eso cada producto está
            elegido y diseñado para combinar calidad, estética y funcionalidad.
          </p>

          <p className="nosotros-text">
            Nuestro objetivo es que cada cliente encuentre ese detalle especial que haga que su
            momento de mate sea aún mejor.
          </p>

          <div className="nosotros-values">
            <div className="nosotros-value">
              <span className="nosotros-value-icon">🤝</span>
              <div>
                <strong>Trato cercano</strong>
                <p>Respondemos cada consulta como si fuera la de un amigo.</p>
              </div>
            </div>
            <div className="nosotros-value">
              <span className="nosotros-value-icon">✅</span>
              <div>
                <strong>Calidad seleccionada</strong>
                <p>Cada pieza pasa por un control antes de llegar a vos.</p>
              </div>
            </div>
            <div className="nosotros-value">
              <span className="nosotros-value-icon">📍</span>
              <div>
                <strong>100% cordobés</strong>
                <p>Nacimos en Córdoba y latimos al ritmo de esta ciudad.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
