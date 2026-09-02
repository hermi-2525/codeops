function Dish({ name, price, count, onAdd }) {
  return (
    <div className="dish-card">
      <h3>
        {name} <span>({count})</span>
      </h3>

      <p className="price">{price} ETB</p>

      <button onClick={onAdd}>
        Add to Order
      </button>
    </div>
  );
}

export default Dish;