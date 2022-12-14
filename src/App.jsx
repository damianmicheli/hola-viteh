import { useState } from 'react'
import elviejo from './assets/elviejo.webp'
import github from './assets/github.webp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hola viteh!</h1>
      <a href="https://www.youtube.com/watch?v=AOaTP9g4Uw4&ab_channel=LuisM." target="_blank">
      <img src={elviejo} className="Viejo" alt="React logo" />
      </a>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Viejo to learn more
      </p>
      <a href="https://github.com/damianmicheli/hola-viteh" target="_blank">
      <img src={github} width="120px" alt="Github logo" />
      </a>
    </div>
  )
}

export default App
