export default function Header({ favoriteCount }) {
  return (
    <header className="header">
      <div className="logo">
        ShopEasy
      </div>

      <div className="favorite-count">
         Favorites: {favoriteCount}
      </div>
    </header>
  );
}