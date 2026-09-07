import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const {
    items,
    total,
    removeItem,
    clearCart
  } = useContext(CartContext);

  return (
    <section>
      <h1>Your Cart</h1>

      {items.length === 0 ? (
        <>
          <p>Your cart is empty.</p>

          <Link
            to="/menu"
            className="primary-button"
          >
            Browse Menu
          </Link>
        </>
      ) : (
        <>
          {items.map((dish) => (
            <div
              className="cart-item"
              key={dish.id}
            >
              <span>
                {dish.name} -
                {" "}
                {dish.price} ETB
              </span>

              <button
                onClick={() =>
                  removeItem(dish.id)
                }
              >
                Remove
              </button>
            </div>
          ))}

          <h2>
            Total: {total} ETB
          </h2>

          <button
            onClick={clearCart}
          >
            Clear Cart
          </button>

          <Link
            to="/checkout"
            className="primary-button"
          >
            Checkout
          </Link>
        </>
      )}
    </section>
  );
}