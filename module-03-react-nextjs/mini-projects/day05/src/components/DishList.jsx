import React from "react";
import Dish from "./Dish";

const DishList = React.memo(function DishList({
  dishes,
  onAdd
}) {
  if (dishes.length === 0) {
    return <p className="empty">No dishes found.</p>;
  }

  return (
    <div className="dish-grid">
      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          dish={dish}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
});

export default DishList;