import { useUpgradeStore } from "../oop/upgrades/useUpgradeStore";
import Upgrade from "../oop/upgrades/Upgrade";
import Safety_Scissors from "../../assets/Safety_Scissors.png"
import Potholes from "../../assets/Potholes_Cropped.png";
import Godzilla from "../../assets/Godzilla.png"

/**
 * this component displays current upgrade info, it is subscribed to the Upgrade object to get it.
 */

export default function UpgradeComponent({upgrade, index}: {upgrade: Upgrade, index: number}) {
    const upgradeImages: string[] = [Safety_Scissors, Potholes, Godzilla];
    const state = useUpgradeStore(upgrade);
    const name: string = state.name;
    const description: string = state.description;
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
                <div
                    className="divInUpgrade"
                >
                    {
                        upgradeImages[index] != null ? (
                            <img 
                            className="imageInUpgrade"
                            draggable="false"
                            src={upgradeImages[index]}
                        />
                        ): null
                    }
                    <div>
                        <p>
                            {name}
                        </p>
                        <p>
                            {description}
                        </p>
                        <p>
                            count: {count}
                        </p>
                        <p>
                            cost: {costStr}
                        </p>
                        <p>
                            iteration per level {upgrade.getIterationPerLevel()}
                        </p>
                        <p>
                            total iteration {iterationAmountStr}
                        </p>
                    </div>
                </div>
            </button>
        </div>
    )
}