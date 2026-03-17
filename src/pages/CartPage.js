import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const WhatsAppIcon = () => (
  <svg className="whatsapp-icon" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.67 4.61 1.832 6.502L4 29l7.697-1.81A12.94 12.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22a10.95 10.95 0 01-5.578-1.527l-.398-.237-4.57 1.074 1.09-4.458-.26-.41A10.94 10.94 0 015 15c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.03-8.18c-.33-.165-1.95-.962-2.252-1.072-.303-.11-.523-.165-.743.165-.22.33-.854 1.072-1.047 1.292-.192.22-.385.247-.715.082-.33-.165-1.394-.514-2.656-1.64-.981-.876-1.643-1.96-1.836-2.29-.192-.33-.02-.508.145-.673.149-.149.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.743-1.79-1.018-2.45-.268-.643-.54-.555-.743-.565l-.633-.01c-.22 0-.578.082-.88.412-.303.33-1.155 1.128-1.155 2.75s1.183 3.19 1.348 3.41c.165.22 2.327 3.555 5.638 4.985.787.34 1.402.543 1.881.695.79.252 1.51.216 2.08.131.634-.095 1.95-.798 2.225-1.568.274-.77.274-1.43.192-1.568-.082-.138-.302-.22-.633-.385z" />
  </svg>
);

export default function CartPage() {
  const { cart, removeItem, updateQuantity, clearCart, total, totalItems } = useCart();
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    const phone = "5493512002397";
    let message = "¡Buenas, cómo estás! 😊 Quiero hacer el siguiente pedido desde *Dale Mate CBA*:\n\n";

    cart.forEach((item) => {
      const subtotal = (item.price * item.quantity).toLocaleString("es-AR");
      message += `🧉 *${item.name}* x${item.quantity} — $${subtotal}\n`;
    });

    message += `\n💰 *Total: $${total.toLocaleString("es-AR")}*\n\n`;
    message += "¿Me podés confirmar disponibilidad y forma de envío? ¡Gracias! 🙌";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <div className="cart-empty-icon">🧉</div>
          <h2>Tu carrito está vacío</h2>
          <p>Todavía no agregaste ningún mate. ¡Dale, elegí uno!</p>
          <Link to="/#catalogo" className="btn-primary" style={{ display: "inline-flex" }}>
            Ver catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1 className="cart-title">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          Mi carrito
          <span style={{ fontSize: "1rem", fontFamily: "Poppins", fontWeight: 500, color: "var(--text-light)" }}>
            ({totalItems} {totalItems === 1 ? "producto" : "productos"})
          </span>
        </h1>
        <button className="cart-clear-btn" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>

      <div className="cart-layout">
        <div className="cart-items-list">
          {cart.map((item, i) => (
            <div
              className="cart-item"
              key={item.id}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div
                className="cart-item-img"
                onClick={() => navigate(`/producto/${item.id}`)}
                title="Ver producto"
              >
                <img src={item.images[0]} alt={item.name} loading="lazy" />
              </div>

              <div className="cart-item-info">
                <p className="cart-item-category">{item.category}</p>
                <h3 className="cart-item-name">{item.name}</h3>
                <div className="cart-item-controls">
                  <button
                    className="cart-qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label="Reducir"
                  >
                    −
                  </button>
                  <span className="cart-qty-value">{item.quantity}</span>
                  <button
                    className="cart-qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label="Aumentar"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="cart-item-price">
                <p className="unit-price">${item.price.toLocaleString("es-AR")} c/u</p>
                <p className="total-price">
                  ${(item.price * item.quantity).toLocaleString("es-AR")}
                </p>
              </div>

              <button
                className="cart-item-remove"
                onClick={() => removeItem(item.id)}
                aria-label="Eliminar producto"
                title="Eliminar"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Resumen del pedido</h3>

          {cart.map((item) => (
            <div className="summary-row" key={item.id}>
              <span>
                {item.name} x{item.quantity}
              </span>
              <span>${(item.price * item.quantity).toLocaleString("es-AR")}</span>
            </div>
          ))}

          <div className="summary-row total">
            <span>Total</span>
            <span>${total.toLocaleString("es-AR")}</span>
          </div>

          <button className="whatsapp-btn" onClick={handleWhatsApp}>
            <WhatsAppIcon />
            Finalizar por WhatsApp
          </button>

          <p className="cart-note">
            Al hacer clic vas a ser redirigido a WhatsApp con tu pedido listo
            para enviar. Te contactamos para coordinar el envío y el pago.
          </p>
        </div>
      </div>
    </div>
  );
}
