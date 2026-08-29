import Menu from "./components/Menu";
import menuItems from "./data";

function App() {
  return (
    <div className="app">
      <h1>Addis Eats</h1>
      <p>Today's Menu</p>

      <Menu
        dishes={menuItems}
        category="Main"
      />
    </div>
  );
}

export default App;