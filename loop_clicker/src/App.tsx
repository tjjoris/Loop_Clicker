import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loop from './components/Loop'
import LoopBunch from './components/LoopBunch'
import ScoreComponent from './components/ScoreComponent'
import Score from './oop/game/Score'

function App() {
  const [count, setCount] = useState(0)
  const scoreObject = new Score();

  return (
    <div
      onClick={() => {scoreObject.incrementScore(1);}}
      style={{
        userSelect: "none",
        width: "100vw",
        height: "100vh",
        background: "grey"
      }}
      >
      <ScoreComponent scoreObject = {scoreObject}/>
      <Loop/>
      <LoopBunch/>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        This project includes clicking to increase score.
      </p>
    </div>
  )
}

export default App
