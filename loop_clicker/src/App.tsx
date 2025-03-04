//App.tsx
import './App.css'
import LoopComponent from './components/Loop'
import LoopBunchComponent from './components/LoopBunch'
import ScoreComponent from './components/ScoreComponent'
import Score from './oop/game/Score'
import LoopHandler from './oop/loop/LoopHandler'
import { useLoopHandlerStore } from './oop/loop/UseLoopHandlerStore'
import Loop from './oop/loop/Loop'
import { useRef } from 'react'
import Upgrades from './oop/upgrades/Upgrades'
import UpgradesComponent from './components/UpgradesComponent'
import ScoreUpgradeObserver from './oop/game/ScoreUpgradeObserver'
import LoopBunch from './oop/loop/LoopBunch'
import Data from './Data.json'
import { useEffect } from 'react'

function App() {
  const dataRef = useRef(Data);
  const data = dataRef.current;
  const loopHandlerRef = useRef(new LoopHandler());
  const loopHandler = loopHandlerRef.current;
  const loopBunchRef = useRef(new LoopBunch());
  const loopBunch = loopBunchRef.current;
  const scoreUpgradeObserverRef = useRef(new ScoreUpgradeObserver());
  const scoreUpgradeObserver = scoreUpgradeObserverRef.current;
  const scoreObjectRef = useRef(new Score(loopHandler, scoreUpgradeObserver));
  const scoreObject = scoreObjectRef.current;
  const upgradesRef = useRef(new Upgrades(scoreObject, scoreUpgradeObserver, data[0].value));
  const upgrades = upgradesRef.current;
  const loopHandlerState: Loop | null = useLoopHandlerStore(loopHandler);
  console.log("app render");
  useEffect(() => {
    console.log("loopHandlerState changed:", loopHandlerState);
  }, [loopHandlerState])

  return (
    <>
      <div
        // onClick={() => {scoreObject.incrementScore(1);}}
        style={{
          userSelect: "none",
          width: "100px",
          height: "100px",
          backgroundColor: "#242424"
        }}
        >
        <LoopBunchComponent score={scoreObject} loopBunch={loopBunch}/>
        {/* <LoopComponent/> */}
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
