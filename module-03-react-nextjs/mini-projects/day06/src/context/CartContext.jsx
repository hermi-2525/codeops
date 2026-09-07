import { createContext, useContext, useMemo, useReducer } from "react";

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        items: [...state.items, action.dish]
      };

    case "remove":
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.index)
      };

    case "clear":
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: []
  });

  const total = useMemo(
    () => state.items.reduce((sum, item) => sum + Number(item.price), 0),
    [state.items]
  );

  const value = {
    items: state.items,
    total,
    addToCart: (dish) => dispatch({ type: "add", dish }),
    removeFromCart: (index) => dispatch({ type: "remove", index }),
    clearCart: () => dispatch({ type: "clear" })
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}