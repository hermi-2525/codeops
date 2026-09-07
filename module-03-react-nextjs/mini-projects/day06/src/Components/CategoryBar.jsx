export default function CategoryBar({ category, setCategory }) {
  const categories = ["All", "Traditional", "Vegan"];

  return (
    <div className="categories">
      {categories.map((item) => (
        <button
          key={item}
          className={category === item ? "category active" : "category"}
          onClick={() => setCategory(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}