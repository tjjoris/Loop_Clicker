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
import Upgrades from './oop/upgrades/Upgrades'
import UpgradesComponent from './components/UpgradesComponent'
import ScoreUpgradeObserver from './oop/game/ScoreUpgradeObserver'

function App() {
  const loopHandlerRef = useRef(new LoopHandler());
  const loopHandler = loopHandlerRef.current;
  const scoreUpgradeObserver = useRef(new ScoreUpgradeObserver());
  const scoreObjectRef = useRef(new Score(loopHandler, scoreUpgradeObserver.current));
  const scoreObject = scoreObjectRef.current;
  const upgradesRef = useRef(new Upgrades(scoreObject, scoreUpgradeObserver.current));
  const upgrades = upgradesRef.current;
  const loopHandlerState: Loop | null = useLoopHandlerStore(loopHandler);
  return (
    <>
      <div
        onClick={() => {scoreObject.incrementScore(1);}}
        style={{
          userSelect: "none",
          width: "100px",
          height: "100px",
          backgroundColor: "#242424"
        }}
        >
        <LoopBunch/>
        {loopHandlerState && <LoopComponent/>}
      </div>
      <div>
        <ScoreComponent scoreObject = {scoreObject}/>
        <p className="read-the-docs">
          {}
        </p>
        <UpgradesComponent upgrades={upgrades}/>
      </div>
    </>
  )
}

export default App
