import { useUpgradeStore } from "../oop/upgrades/useUpgradeStore";
import Upgrade from "../oop/upgrades/Upgrade";

/**
 * this component displays current upgrade info, it is subscribed to the Upgrade object to get it.
 */

export default function UpgradeComponent({upgrade}: {upgrade: Upgrade}) {
    const state = useUpgradeStore(upgrade);
    const name: string = state.name;
    const count: number = state.count;
    const iterationAmount: number = state.iterationAmount;
    const iterationAmountStr: string = iterationAmount.toFixed(2);
    const cost: number = state.cost;
    const costStr: string = cost.toFixed(2);
    let backgColour: string = "grey"
    if (state.canAfford) {
        backgColour= "#1a1a1a"
    }

    return (
        <div
            className = "upgrade"
        >
            <button 
                onClick={() => {upgrade.incrementLevel();}}
                style={{
                    backgroundColor: backgColour
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
                    {/* iteration per level {state.getIterationPerLevel()} */}
                </p>
                <p>
                    total iteration {iterationAmountStr}
                </p>
            </button>
        </div>
    )
}