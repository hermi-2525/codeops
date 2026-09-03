const categories = ["All", "Main", "Vegan", "Grill"];

function CategoryBar({ selected, onSelect }) {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={selected === category ? "active" : ""}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;