import { useCallback, useContext, useMemo } from "react";
import { ThemeProvider } from "./Context/ThemeContext";
import { CartContext, CartProvider } from "./CartProvider";
import DeepComponent from "./Components/DeepComponent";
import FetchOne from "./Components/FetchOne";
import FetchTwo from "./Components/FetchTwo";
import ReducerComparison from "./Components/ReducerComparison";
import CartBadge from "./Components/CartBadge";
import MemoDishList from "./Components/MemoDishList";
import { useFetch } from "./useFetch";
import "./App.css";

function Content() {
  console.log("Content rendered");
  const { data, loading, error } = useFetch("/dishes.json");
  console.log("useFetch result:", { data, loading, error });
  const { dispatch } = useContext(CartContext);

  const dishes = useMemo(() => {
    return data ?? [];
  }, [data]);

  const addToCart = useCallback(
    (dish) => {
      dispatch({
        type: "add",
        dish
      });
    },
    [dispatch]
  );

  return (
    <main>
      <h1>Day 30 Exercises</h1>

      <section>
        <h2>Exercise 1: useContext</h2>
        <DeepComponent />
      </section>

      <section>
        <h2>Exercise 2: useFetch</h2>
        <FetchOne />
        <FetchTwo />
      </section>

      <section>
        <h2>Exercise 4: useReducer</h2>
        <ReducerComparison />
      </section>

      <section>
        <h2>Exercise 5-6: Cart</h2>
        <CartBadge />
      </section>

      <section>
        <h2>Exercise 7: useMemo + useCallback + React.memo</h2>

        {loading && <p>Loading dishes...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && (
          <MemoDishList
            dishes={dishes}
            onAdd={addToCart}
          />
        )}
      </section>
    </main>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Content />
      </CartProvider>
    </ThemeProvider>
  );
}
