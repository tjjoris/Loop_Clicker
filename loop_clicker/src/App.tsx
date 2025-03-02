//App.tsx
import './App.css'
import LoopComponent from './components/Loop'
import LoopBunch from './components/LoopBunch'
import ScoreComponent from './components/ScoreComponent'
import Score from './oop/game/Score'
import LoopHandler from './oop/loop/LoopHandler'
import { useLoopHandlerStore } from './oop/loop/UseLoopHandlerStore'
import Loop from './oop/loop/Loop'
import { useRef } from 'react'

function App() {
  const loopHandlerRef = useRef(new LoopHandler());
  const loopHandler = loopHandlerRef.current;
  const scoreObjectRef = useRef(new Score(loopHandler));
  const scoreObject = scoreObjectRef.current;
  const loopHandlerState: Loop | null = useLoopHandlerStore(loopHandler);
  console.log("loop handler state " + loopHandlerState);
  return (
    <div
      onClick={() => {scoreObject.incrementScore(1);}}
      style={{
        userSelect: "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#242424"
      }}
      >
      <ScoreComponent scoreObject = {scoreObject}/>
      <LoopBunch/>
      {loopHandlerState && <LoopComponent/>}
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {}
      </p>
    </div>
  )
}

export default App
