import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [phone, setPhone] = useState("");

  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/menu";

  async function handleSubmit(event) {
    event.preventDefault();

    if (!phone.trim()) {
      return;
    }

    await login(phone);

    navigate(from, {
      replace: true
    });
  }

  return (
    <section className="login">
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Phone Number
        </label>

        <input
          type="tel"
          value={phone}
          onChange={(event) =>
            setPhone(event.target.value)
          }
          placeholder="Enter your phone number"
          required
        />

        <button className="button" type="submit">
          Sign In
        </button>
      </form>
    </section>
  );
}