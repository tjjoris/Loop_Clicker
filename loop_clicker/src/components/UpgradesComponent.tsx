import { useUpgradesStore } from "../oop/upgrades/useUpgradesStore";
import Upgrades from "../oop/upgrades/Upgrades";
import UpgradeComponent from "./UpgradeComponent";

export default function UpgradesComponent({upgrades}: {upgrades: Upgrades}) {
    const state = useUpgradesStore(upgrades)
    let x = 300;
    let y = 300;

    return (
        <div
            style={{
                position:"absolute",
                left: `${x}px`,
                top:`${y}px`,
                display: "flex",
                flexDirection: "column"
            }}
        >
            {state.map((upgrade, index) => {
                return <UpgradeComponent key = {index} upgrade={upgrade} />;
                // return <p> hello</p>
            })}
        </div>
    )
}