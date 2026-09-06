const categories = ["All", "Main", "Vegan", "Grill"];

export default function CategoryBar({ category, onChange }) {
  return (
    <div className="categories">
      {categories.map((item) => (
        <button
          key={item}
          className={category === item ? "active" : ""}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}