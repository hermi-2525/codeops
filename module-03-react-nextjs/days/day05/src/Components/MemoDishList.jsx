import React from "react";

const DishList = React.memo(function DishList({ dishes, onAdd }) {
  return (
    <div>
      {dishes.map((dish) => (
        <div key={dish.id}>
          <span>
            {dish.name} - {dish.price} ETB
          </span>
          <button onClick={() => onAdd(dish)}>Add</button>
        </div>
      ))}
    </div>
  );
});

export default DishList;