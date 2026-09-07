import Dish from "./Dish";

export default function DishList({ dishes }) {
  if (!dishes || dishes.length === 0) {
    return <p className="empty">No dishes found in this category.</p>;
  }

  return (
    <div className="dish-grid">
      {dishes.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  );
}