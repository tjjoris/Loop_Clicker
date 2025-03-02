import { useUpgradesStore } from "../oop/upgrades/useUpgradesStore";
import Upgrades from "../oop/upgrades/Upgrades";

export default function UpgradesComponent({upgrades}: {upgrades: Upgrades}) {
    const state = useUpgradesStore(upgrades)
    let name : String = state[0].name;
    let x = 300;
    let y = 100;

    return (
        <>
            <button 
            style={{
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`
            }}
            >
                {name}
            </button>
        </>
    )
}