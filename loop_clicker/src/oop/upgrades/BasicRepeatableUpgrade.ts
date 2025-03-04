import Upgrade from "./Upgrade";
import Score from "../game/Score";

export default class BasicRepeatableUpgrade extends Upgrade {

    constructor(score: Score, upgradesData: 
        {name: string; cost: number; incrementAmount: number; costMult: number}) {
        super(score, upgradesData);
        this.state = {name: upgradesData.name, cost: upgradesData.cost, iterationAmount: 0, count: 0, canAfford: false}  ;
        this.iterationIncrease = upgradesData.incrementAmount;
        this.costMult = 1.1;
    }
}