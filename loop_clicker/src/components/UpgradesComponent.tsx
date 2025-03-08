import { useUpgradesStore } from "../oop/upgrades/useUpgradesStore";
import Upgrades from "../oop/upgrades/Upgrades";
import UpgradeComponent from "./UpgradeComponent";
import Upgrader from "../oop/upgrades/Upgrader";

export default function UpgradesComponent({upgrades, upgrader}: {upgrades: Upgrades, upgrader: Upgrader}) {
    const state = useUpgradesStore(upgrades)
    // let x = 300;
    // let y = 300;

    return (
        <div
            className="upgradesComponent"
        >
            {state.map((upgrade, index) => {
                return <UpgradeComponent key = {index} upgrade={upgrade} index={index} upgrader={upgrader}/>;
                // return <p> hello</p>
            })}
        </div>
    )
}