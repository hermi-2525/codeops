function Dish({ name, price }) {
  return (
    <div className="Dishlist">
      <h3>{name}</h3>
      <p>{price} ETB</p>
    </div>
  );
}

export default Dish;