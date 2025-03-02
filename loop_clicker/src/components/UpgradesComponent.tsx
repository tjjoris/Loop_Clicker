import { useUpgradesStore } from "../oop/upgrades/useUpgradesStore";
import Upgrades from "../oop/upgrades/Upgrades";
import UpgradeComponent from "./UpgradeComponent";

export default function UpgradesComponent({upgrades}: {upgrades: Upgrades}) {
    const state = useUpgradesStore(upgrades)
    let x = 300;
    let y = 100;

    return (
        <div
            style={{
                position:"absolute",
                left:"300px",
                top:"200px"
            }}
        >
            {state.map((upgrade) => {
                return <UpgradeComponent upgrade={upgrade} />;
                // return <p> hello</p>
            })}
        </div>
    )
}