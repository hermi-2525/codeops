import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Dish({ dish }) {
  const { addToCart } = useCart();

  return (
    <article className="dish-card">
      <Link to={`/menu/${dish.id}`} className="dish-link">
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>
        <strong>{dish.price} ETB</strong>
      </Link>

      <button
        className="button"
        onClick={() => addToCart(dish)}
      >
        Add to Cart
      </button>
    </article>
  );
}