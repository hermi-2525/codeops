import { useState } from 'react'
import Order from './components/Order'
import Menu from './components/Menu'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <header className="header">
        <h1>Addis Eats</h1>
        <p>Order delicious Ethiopian food</p>
      </header>

      <main>
        <Menu />
        <Order/>
      </main>
    </div>
  )
}

export default App
