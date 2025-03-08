import { useUpgradeStore } from "../oop/upgrades/useUpgradeStore";
import Upgrade from "../oop/upgrades/Upgrade";
import Upgrader from "../oop/upgrades/Upgrader";
import Safety_Scissors from "../../assets/Safety_Scissors.png"
import Godzilla from "../../assets/Godzilla.png"
import Tire_Fire1 from "../../assets/Tire_Fire1.png"
import numToStr from "../oop/numToStr";

/**
 * this component displays current upgrade info, it is subscribed to the Upgrade object to get it.
 */

export default function UpgradeComponent({upgrade, index, upgrader}: {upgrade: Upgrade, index: number, upgrader: Upgrader}) {
    const upgradeImages: string[] = [Safety_Scissors, Tire_Fire1, Godzilla, Godzilla, Godzilla, Godzilla, Godzilla];
    const state = useUpgradeStore(upgrade);
    const name: string = state.name;
    const description: string = state.description;
    const count: number = state.count;
    const countStr: string = numToStr(count);
    const iterationAmount: number = state.iterationAmount;
    const iterationAmountStr: string = numToStr(iterationAmount);
    const cost: number = state.cost;
    const costStr: string = numToStr(cost);
    const iterationPerLvlStr: string = numToStr(upgrade.getIterationPerLevel());
    let isUpgradeEnabledClass: string = "upgradeIsDisabled";
    if (state.canAfford) {
        isUpgradeEnabledClass = "upgradeIsEnabled";
    }
    if (upgrade.getReveal()) {
        return (
            <div
                className = {`upgrade ${isUpgradeEnabledClass}`}
            >
                <button 
                    onClick={() => {
                        upgrade.incrementLevel(); 
                        upgrader.addLevel(upgrade);
                        upgrader.reveal(upgrade.getIndex() + 1)
                    }}
                >
                    <div
                        className="divInUpgrade"
                    >
                        <div
                            className="imageInUpgrade"
                        >
                            {
                                upgradeImages[index] != null ? (
                                    <img 
                                    // className="imageInUpgrade"
                                    // draggable="false"
                                    src={upgradeImages[index]}
                                />
                                ): null
                            }
                            
                            <p
                                className="upgradeCost"
                            >
                                cost: {costStr}
                            </p>
                        </div>
                        <div>
                            <p
                                className="upgradeTitle"
                            >
                                {name}
                            </p>
                            <p>
                                {description}
                            </p>
                            <p>
                                count: {countStr}
                            </p>
                            <p>
                                iteration per level {iterationPerLvlStr}
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
    else {
        return (

            <div
                className = "unrevealedUpgrade"
            >
                <p
                    className="upgradeCost"
                >
                    cost: {costStr}
                </p>
            </div>
        )
    }
}