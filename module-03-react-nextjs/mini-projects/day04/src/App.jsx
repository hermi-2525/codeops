import { useState } from 'react'
import Menu from "./Components/Menu";
import Order from "./Components/Order";
import Search from "./Components/Search";
import './App.css'

function App() {
  return (
 
      <div className="App">
         <header>
        <h1>Addis Eats</h1>
        <p>The Menu That Loads Itself</p>
      </header>
      <Search />
      <Menu />
      <Order />
        </div>
  )
}

export default App
