import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

export default function Layout() {
  return (
    <div className="app">
      <Header />
      <Nav />

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}