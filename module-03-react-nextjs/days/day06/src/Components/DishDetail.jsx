import { Link, useParams } from "react-router-dom";
import { dishes } from "../data";

export default function DishDetail() {
  const { id } = useParams();

  const dish = dishes.find(
    (item) => item.id === id
  );

  if (!dish) {
    return (
      <section className="not-found">
        <h2>Dish Not Found</h2>

        <p>
          No dish called {id} was found.
        </p>

        <Link to="/menu" className="primary-button">
          Back to Menu
        </Link>
      </section>
    );
  }

  return (
    <section className="dish-detail">
      <span className="category">
        {dish.category}
      </span>

      <h1>{dish.name}</h1>

      <h2>{dish.price} ETB</h2>

      <p>{dish.description}</p>

      <Link to="/menu" className="primary-button">
        Back to Menu
      </Link>
    </section>
  );
}