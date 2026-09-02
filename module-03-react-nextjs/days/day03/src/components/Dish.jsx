import { useState } from "react";

function Dish({ name, price, onAdd }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
    onAdd();
  }

  return (
    <div className="dish">
      <h3>
        {name} <span>({count})</span>
      </h3>

      <p>{price} ETB</p>

      <button onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default Dish;