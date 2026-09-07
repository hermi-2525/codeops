export default function ProductCard({
  product,
  isFavorite,
  toggleFavorite
}) {
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={product.thumbnail}
          alt={product.title}
        />
      </div>

      <div className="product-info">
        <span className="category">
          {product.category}
        </span>

        <h3>{product.title}</h3>

        <p className="description">
          {product.description}
        </p>

        <div className="product-bottom">
          <strong>${product.price}</strong>

          <button
            className={isFavorite ? "favorite active" : "favorite"}
            onClick={() => toggleFavorite(product)}
          >
            {isFavorite ? "❤️" : "♡"}
          </button>
        </div>
      </div>
    </div>
  );
}