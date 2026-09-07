import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { items, total, clearCart } = useCart();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
    clearCart();

    setTimeout(() => {
      navigate("/menu", {
        replace: true
      });
    }, 1000);
  }

  if (submitted) {
    return (
      <section>
        <h1>Order Placed!</h1>
        <p>Thank you for ordering from Addis Eats.</p>
        <p>Returning to the menu...</p>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section>
        <h1>Checkout</h1>
        <p>Your cart is empty.</p>
      </section>
    );
  }

  return (
    <section className="checkout">
      <h1>Checkout</h1>

      <div className="order-summary">
        <h2>Order Summary</h2>

        {items.map((item, index) => (
          <p key={`${item.id}-${index}`}>
            {item.name} - {item.price} ETB
          </p>
        ))}

        <h3>Total: {total} ETB</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Name</label>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Phone</label>

        <input
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <label>Delivery Address</label>

        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          required
        />

        <button className="button" type="submit">
          Place Order
        </button>
      </form>
    </section>
  );
}