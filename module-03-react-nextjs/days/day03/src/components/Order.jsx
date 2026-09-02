import { useState } from "react";

function Order() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "Bole",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  const validPhone =
    /^(?:\+251|0)9\d{8}$/.test(form.phone);

  function handleSubmit(e) {
    e.preventDefault();
    alert("Order submitted successfully");
  }

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h2>Delivery Information</h2>

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
      />

      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="TeleBirr number"
      />

      {form.phone && !validPhone && (
        <p className="error">
          Use 09… or +2519…
        </p>
      )}

      <input
        name="area"
        value={form.area}
        onChange={handleChange}
        placeholder="Area"
      />

      <button
        type="submit"
        disabled={!validPhone}
      >
        Submit Order
      </button>
    </form>
  );
}

export default Order;