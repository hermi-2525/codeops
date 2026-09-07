import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Layout from "./Layout";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import DishDetail from "./Components/DishDetail";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";

import RequireAuth from "./RequireAuth";
import {CartProvider} from "./context/CartContext";
import { AuthProvider} from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Layout />}
            >
              <Route
                index
                element={<Home />}
              />

              <Route
                path="menu"
                element={<Menu />}
              />

              <Route
                path="menu/:id"
                element={<DishDetail />}
              />

              <Route
                path="cart"
                element={<Cart />}
              />

              <Route
                path="login"
                element={<Login />}
              />

              <Route
                path="checkout"
                element={
                  <RequireAuth>
                    <Checkout />
                  </RequireAuth>
                }
              />

              <Route
                path="*"
                element={<NotFound />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;