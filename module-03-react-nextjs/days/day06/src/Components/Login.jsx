import { useContext, useState } from "react";
import {
  useLocation,
  useNavigate
} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [phone, setPhone] = useState("");

  const {
    login
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  const from =
    location.state?.from?.pathname ||
    "/menu";

  function handleSubmit(e) {
    e.preventDefault();

    login(phone);

    navigate(from, {
      replace: true
    });
  }

  return (
    <section className="login">
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
          required
        />

        <button type="submit">
          Sign In
        </button>
      </form>
    </section>
  );
}