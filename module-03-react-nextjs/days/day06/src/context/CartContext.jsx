import {
  createContext,
  useMemo,
  useReducer
} from "react";

const CartContext =
  createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        items: [
          ...state.items,
          action.dish
        ]
      };

    case "remove":
      return {
        ...state,
        items: state.items.filter(
          (dish) =>
            dish.id !== action.id
        )
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

export function CartProvider({
  children
}) {
  const [state, dispatch] =
    useReducer(cartReducer, {
      items: []
    });

  const total = state.items.reduce(
    (sum, dish) =>
      sum + dish.price,
    0
  );

  const value = useMemo(
    () => ({
      items: state.items,
      total,

      addItem: (dish) =>
        dispatch({
          type: "add",
          dish
        }),

      removeItem: (id) =>
        dispatch({
          type: "remove",
          id
        }),

      clearCart: () =>
        dispatch({
          type: "clear"
        })
    }),
    [state.items, total]
  );

  return (
    <CartContext.Provider
      value={value}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext };