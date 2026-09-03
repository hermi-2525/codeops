import { useState } from 'react'
import Menu from "./components/Menu";
import Search from "./components/Search";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="app">
      <header>
        <h1>Addis Eats</h1>
        <p>Day 29 - Side Effects</p>
      </header>

      <Search />

      <Menu />
    </div>
  )
}

export default App
