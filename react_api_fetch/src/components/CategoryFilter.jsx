export default function CategoryFilter({
  categories,
  category,
  setCategory
}) {
  return (
    <div className="categories">
      <button
        className={category === "all" ? "active" : ""}
        onClick={() => setCategory("all")}
      >
        All
      </button>

      {categories.map((item) => (
        <button
          key={item}
          className={category === item ? "active" : ""}
          onClick={() => setCategory(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}