import Dish from "./Dish";

function List({ dishes, onAdd }) {
  if (dishes.length === 0) {
    return <p>No dishes in this category.</p>;
  }

  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          name={dish.name}
          price={dish.price}
          onAdd={() => onAdd(dish)}
        />
      ))}
    </div>
  );
}

export default List;