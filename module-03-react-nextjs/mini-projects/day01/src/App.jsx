import Header from "./components/Header";
import Dish from "./components/Dish";
import "./css/style.css";


const menu = [
  { id: 1, name: "Doro Wat", price: 240 },
  { id: 2, name: "Shiro", price: 120 },
  { id: 3, name: "Tibs", price: 280 },
  { id:4,  name: "Kitfo", price: 300 },
  { id: 5, name: "Gored Gored", price: 350 },
  { id: 6, name: "Firfir", price: 150 },
  { id: 7, name: "Chechebsa", price: 180 },
  { id: 8, name: "Atayef", price: 200 },
];

function App() {
  return (
    <div className="App">
      <Header />

      <div className="DishList">
        {menu.map((dish) => (
          <Dish
            key={dish.id}
            name={dish.name}
            price={dish.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;