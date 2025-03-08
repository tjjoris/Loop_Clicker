import { useUpgradesStore } from "../oop/upgrades/useUpgradesStore";
import Upgrades from "../oop/upgrades/Upgrades";
import UpgradeComponent from "./UpgradeComponent";
import Upgrader from "../oop/upgrades/Upgrader";
import GameEnd from "../oop/game/GameEnd";

export default function UpgradesComponent({upgrades, upgrader, gameEnd}: {upgrades: Upgrades, upgrader: Upgrader, gameEnd: GameEnd}) {
    const state = useUpgradesStore(upgrades)
    // let x = 300;
    // let y = 300;

    return (
        <div
            className="upgradesComponent"
        >
            {state.map((upgrade, index) => {
                return <UpgradeComponent key = {index} upgrade={upgrade} index={index} upgradesLength={state.length} upgrader={upgrader} gameEnd= {gameEnd}/>;
                // return <p> hello</p>
            })}
        </div>
    )
}