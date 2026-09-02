import { useState } from 'react'
import Menu from './Components/Menu'
import Order from './Components/Order'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <header className="header">
        <h1>Addis Eats</h1>
        <p>
          Delicious Ethiopian food delivered to you
        </p>
      </header>

      <main>
        <Menu />
        <Order />
      </main>

      
    </div>
  )
}

export default App
