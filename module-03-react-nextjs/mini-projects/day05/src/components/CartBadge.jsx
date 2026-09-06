import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

export default function CartBadge() {
  const { items, total } = useContext(CartContext);

  return (
    <div className="cart-badge">
      🛒 {items.length} items | {total} ETB
    </div>
  );
}