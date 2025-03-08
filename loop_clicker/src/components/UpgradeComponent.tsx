import { useUpgradeStore } from "../oop/upgrades/useUpgradeStore";
import Upgrade from "../oop/upgrades/Upgrade";
import Upgrader from "../oop/upgrades/Upgrader";
import Super_Scissors from "../../assets/SuperScissors.png"
import Godzilla from "../../assets/GodzillaOCv2.png"
import Tire_Fire from "../../assets/Tire_Firev2.png"
import Blackhole from "../../assets/Blackhole.png"
import Bad_Programmer from "../../assets/Bad_Programmer.png"
import numToStr from "../oop/numToStr";
import GameEnd from "../oop/game/GameEnd";

/**
 * this component displays current upgrade info, it is subscribed to the Upgrade object to get it.
 */

export default function UpgradeComponent({upgrade, index, upgrader, upgradesLength, gameEnd}: {upgrade: Upgrade, index: number, upgrader: Upgrader, upgradesLength: number, gameEnd: GameEnd}) {
    const upgradeImages: string[] = [Super_Scissors, Tire_Fire, Godzilla, Godzilla, Godzilla, Blackhole, Bad_Programmer];
    const state = useUpgradeStore(upgrade);
    const name: string = state.name;
    const description: string = state.description;
    const count: number = state.count;
    const countStr: string = numToStr(count);
    // const iterationAmount: number = state.iterationAmount;
    // const iterationAmountStr: string = numToStr(iterationAmount);
    const cost: number = state.cost;
    const costStr: string = numToStr(cost);
    const iterationPerLvlStr: string = numToStr(upgrade.getIterationPerLevel());
    let isUpgradeEnabledClass: string = "upgradeIsDisabled";
    
    const clickFunc = () => {
        console.log("upgrade clicked");
        upgrade.incrementLevel(); 
        upgrader.addLevel(upgrade);
        upgrader.reveal(upgrade.getIndex() + 1);
        if (upgrade.getIndex() >= 2) {
            gameEnd.endTheGameIfLastUpgrade();//end the game if this is last upgrade.
        }
    }
    
    if (state.canAfford) {
        isUpgradeEnabledClass = "upgradeIsEnabled";
    }
    if (upgrade.getReveal()) {
        return (
            <div
                className = {`upgrade ${isUpgradeEnabledClass}`}
            >
                <button 
                    disabled={ !state.canAfford }
                    onClick={clickFunc }
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
                        <div
                            className="upgradeTitleAndInfo"
                        >
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