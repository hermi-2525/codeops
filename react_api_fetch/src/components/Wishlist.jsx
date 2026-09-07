export default function Wishlist({
  favorites,
  toggleFavorite
}) {
  return (
    <section className="wishlist">
      <h2>My Favorites</h2>

      {favorites.length === 0 ? (
        <p>You haven't added any favorites yet.</p>
      ) : (
        <div className="wishlist-grid">
          {favorites.map((product) => (
            <div
              className="wishlist-item"
              key={product.id}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
              />

              <div>
                <h3>{product.title}</h3>
                <p>${product.price}</p>

                <button
                  onClick={() => toggleFavorite(product)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}