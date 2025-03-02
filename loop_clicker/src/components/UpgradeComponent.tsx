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
    let cost: number = state.cost;

    return (
        <>
            <button>
                <p>
                    {name}
                </p>
                <p>
                    count: {count}
                </p>
                <p>
                    cost: {cost}
                </p>
                <p>
                    iteration amount {iterationAmount}
                </p>
            </button>
        </>
    )
}