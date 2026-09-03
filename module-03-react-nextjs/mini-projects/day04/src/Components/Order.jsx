import { useState } from "react";

function Order() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const validPhone =
    /^(09\d{8}|\+2519\d{8})$/.test(form.phone);

  const canSubmit =
    form.name.trim() &&
    form.area.trim() &&
    validPhone;

  function handleSubmit(e) {
    e.preventDefault();
    alert("Order submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Delivery Information</h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="09... or +2519..."
        value={form.phone}
        onChange={handleChange}
      />

      <input
        name="area"
        placeholder="Area"
        value={form.area}
        onChange={handleChange}
      />

      {!validPhone && form.phone && (
        <p>Enter a valid TeleBirr number.</p>
      )}

      <button type="submit" disabled={!canSubmit}>
        Submit Order
      </button>
    </form>
  );
}

export default Order;