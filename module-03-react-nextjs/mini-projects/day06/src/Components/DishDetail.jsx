import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useCart } from "../context/CartContext";

export default function DishDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const { data, loading, error } = useFetch("/dishes.json");

  if (loading) {
    return <p>Loading dish...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  const dish = data?.find(
    (item) => String(item.id) === String(id)
  );

  if (!dish) {
    return (
      <section className="not-found">
        <h1>Dish Not Found</h1>
        <p>No dish called {id} was found.</p>
        <Link to="/menu" className="button">
          Back to Menu
        </Link>
      </section>
    );
  }

  return (
    <section className="detail">
      <h1>{dish.name}</h1>

      <p>{dish.description}</p>

      <p>
        Category: <strong>{dish.category}</strong>
      </p>

      <h2>{dish.price} ETB</h2>

      <button
        className="button"
        onClick={() => addToCart(dish)}
      >
        Add to Cart
      </button>

      <br />

      <Link to="/menu">Back to Menu</Link>
    </section>
  );
}