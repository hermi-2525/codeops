import Dish from "./Dish";

function List({ dishes }) {
  if (dishes.length === 0) {
    return <p className="empty">No dishes in this category.</p>;
  }

  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          name={dish.name}
          price={dish.price}
        />
      ))}
    </div>
  );
}

export default List;