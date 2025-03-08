import Upgrade from "./Upgrade";
import Score from "../game/Score";

export default class BasicRepeatableUpgrade extends Upgrade {

    constructor(score: Score, upgradesData: 
        {name: string; description: string; cost: number; incrementAmount: number; costMult: number}, index: number) {
        super(score, upgradesData, index);
        this.state = {name: upgradesData.name, description: upgradesData.description, cost: upgradesData.cost, iterationAmount: 0, count: 0, canAfford: false}  ;
        this.iterationIncrease = upgradesData.incrementAmount;
        this.costMult = 1.1;
        this.iterationPerLevel = this.iterationIncrease;
    }
}