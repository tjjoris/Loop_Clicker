import { useUpgradeStore } from "../oop/upgrades/useUpgradeStore";
import Upgrade from "../oop/upgrades/Upgrade";

/**
 * this component displays current upgrade info, it is subscribed to the Upgrade object to get it.
 */

export default function UpgradeComponent({upgrade}: {upgrade: Upgrade}) {
    const state = useUpgradeStore(upgrade);
    let name: string = state.name;
    let count: number = state.count;
    let iterationAmount: number = state.iterationAmount;
    let iterationAmountStr: string = iterationAmount.toFixed(2);
    let cost: number = state.cost;
    let costStr: string = cost.toFixed(2);
    let backgColour: string = "grey"
    if (state.canAfford) {
        backgColour= "#1a1a1a"
    }

    return (
        <>
            <button 
                onClick={() => {upgrade.incrementLevel();}}
                style={{
                    backgroundColor: backgColour,
                    padding: "10px"
                }}
            >
                <p>
                    {name}
                </p>
                <p>
                    count: {count}
                </p>
                <p>
                    cost: {costStr}
                </p>
                <p>
                    iteration amount {iterationAmountStr}
                </p>
            </button>
        </>
    )
}