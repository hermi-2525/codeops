import { useContext } from "react";
import { CartContext } from "../CartProvider";

export default function CartBadge() {
  const { items, total } = useContext(CartContext);

  return (
    <div>
      Cart: {items.length} items | {total} ETB
    </div>
  );
}