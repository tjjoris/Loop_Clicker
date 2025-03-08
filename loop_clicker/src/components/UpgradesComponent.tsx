import { useUpgradesStore } from "../oop/upgrades/useUpgradesStore";
import Upgrades from "../oop/upgrades/Upgrades";
import UpgradeComponent from "./UpgradeComponent";
import Upgrader from "../oop/upgrades/Upgrader";
import GameEnd from "../oop/game/GameEnd";
import Score from "../oop/game/Score";

export default function UpgradesComponent({upgrades, upgrader, gameEnd, score}: {upgrades: Upgrades, upgrader: Upgrader, gameEnd: GameEnd, score: Score}) {
    const state = useUpgradesStore(upgrades)
    // let x = 300;
    // let y = 300;

    return (
        <div
            className="upgradesComponent"
        >
            {state.map((upgrade, index) => {
                return <UpgradeComponent key = {index} upgrade={upgrade} index={index} upgradesLength={state.length} upgrader={upgrader} gameEnd= {gameEnd} score={score}/>;
                // return <p> hello</p>
            })}
        </div>
    )
}