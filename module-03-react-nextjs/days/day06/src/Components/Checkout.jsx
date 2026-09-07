import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

export default function Checkout() {
  const {
    items,
    total,
    clearCart
  } = useContext(CartContext);

  const {
    user
  } = useContext(AuthContext);

  function placeOrder() {
    alert(
      "Order placed successfully!"
    );

    clearCart();
  }

  return (
    <section className="checkout">
      <h1>Checkout</h1>

      <p>
        Signed in as: {user.phone}
      </p>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((dish) => (
            <p key={dish.id}>
              {dish.name} -
              {" "}
              {dish.price} ETB
            </p>
          ))}

          <h2>
            Total: {total} ETB
          </h2>

          <button
            onClick={placeOrder}
          >
            Place Order
          </button>
        </>
      )}
    </section>
  );
}