import { Link } from "react-router-dom";

export default function Dish({
  dish,
  onAdd
}) {
  return (
    <div className="dish-card">
      <span className="category">
        {dish.category}
      </span>

      <h3>{dish.name}</h3>

      <p>{dish.price} ETB</p>

      <div className="dish-actions">
        <Link
          to={`/menu/${dish.id}`}
          className="details-button"
        >
          View Details
        </Link>

        <button onClick={() => onAdd(dish)}>
          Add
        </button>
      </div>
    </div>
  );
}