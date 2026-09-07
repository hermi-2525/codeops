import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    items,
    total,
    removeFromCart,
    clearCart
  } = useCart();

  if (items.length === 0) {
    return (
      <section>
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>

        <Link to="/menu" className="button">
          Browse Menu
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h1>Your Cart</h1>

      <div className="cart-list">
        {items.map((item, index) => (
          <div className="cart-item" key={`${item.id}-${index}`}>
            <div>
              <h3>{item.name}</h3>
              <p>{item.price} ETB</p>
            </div>

            <button onClick={() => removeFromCart(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <h2>Total: {total} ETB</h2>

      <div className="cart-actions">
        <button onClick={clearCart}>
          Clear Cart
        </button>

        <Link to="/checkout" className="button">
          Checkout
        </Link>
      </div>
    </section>
  );
}