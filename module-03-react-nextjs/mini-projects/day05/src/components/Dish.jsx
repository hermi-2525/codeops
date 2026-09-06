export default function Dish({ dish, onAdd }) {
  return (
    <div className="dish-card">
      <h3>{dish.name}</h3>
      <p>{dish.category}</p>
      <strong>{dish.price} ETB</strong>

      <button onClick={() => onAdd(dish)}>
        Add to Cart
      </button>
    </div>
  );
}