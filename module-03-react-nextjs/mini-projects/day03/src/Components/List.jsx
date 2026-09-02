import Dish from "./Dish";

function List({ dishes, counts, onAdd }) {
  if (dishes.length === 0) {
    return (
      <p className="empty">
        No dishes in this category yet.
      </p>
    );
  }

  return (
    <div className="menu-grid">
      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          name={dish.name}
          price={dish.price}
          count={counts[dish.id] || 0}
          onAdd={() => onAdd(dish)}
        />
      ))}
    </div>
  );
}

export default List;