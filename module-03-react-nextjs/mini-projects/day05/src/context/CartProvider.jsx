import {
  createContext,
  useMemo,
  useReducer
} from "react";
import { cartReducer } from "../reducer/CartReducer";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: []
  });

  const total = state.items.reduce(
    (sum, dish) => sum + dish.price,
    0
  );

  const value = useMemo(
    // Prevents a new provider value object from being created when cart data has not changed.
    () => ({
      items: state.items,
      dispatch,
      total
    }),
    [state.items, total]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}