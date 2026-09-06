import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function DeepComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Theme: {theme}
    </button>
  );
}
