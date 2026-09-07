import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import Wishlist from "./components/Wishlist";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        const response = await fetch(
          "https://dummyjson.com/products?limit=100"
        );

        if (!response.ok) {
          throw new Error("Failed to load products");
        }

        const data = await response.json();

        setProducts(data.products);

        const uniqueCategories = [
          ...new Set(data.products.map((product) => product.category))
        ];

        setCategories(uniqueCategories);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  function toggleFavorite(product) {
    setFavorites((current) => {
      const exists = current.some((item) => item.id === product.id);

      if (exists) {
        return current.filter((item) => item.id !== product.id);
      }

      return [...current, product];
    });
  }

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "all" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  return (
    <div className="app">
      <Header favoriteCount={favorites.length} />

      <main>
        <section className="hero">
          <h1>ShopEasy</h1>
          <p>Find products you love at great prices.</p>
        </section>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          categories={categories}
          category={category}
          setCategory={setCategory}
        />

        {loading && (
          <div className="message">
            <h2>Loading products...</h2>
          </div>
        )}

        {error && (
          <div className="message error">
            <h2>{error}</h2>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="results">
              <h2>Products</h2>
              <p>{filteredProducts.length} products found</p>
            </div>

            <ProductList
              products={filteredProducts}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          </>
        )}

        <Wishlist
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </main>
    </div>
  );
}

export default App;