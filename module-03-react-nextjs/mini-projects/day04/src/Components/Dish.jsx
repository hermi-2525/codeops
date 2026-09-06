function Dish({ name, price, onAdd }) {
  return (
    <div className="dish">
      <h3>{name}</h3>
      <p>{price} ETB</p>
      <button onClick={onAdd}>Add</button>
    </div>
  );
}

export default Dish;
