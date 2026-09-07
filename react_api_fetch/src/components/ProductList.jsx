import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  favorites,
  toggleFavorite
}) {
  if (products.length === 0) {
    return (
      <div className="message">
        <h2>No products found</h2>
        <p>Try another search or category.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.some(
            (item) => item.id === product.id
          )}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}