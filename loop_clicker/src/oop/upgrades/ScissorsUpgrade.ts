import Upgrade from "./Upgrade";
import Score from "../game/Score";

export default class ScissorsUpgrade extends Upgrade {

    constructor(score: Score) {
        super(score);
        this.state = {name: "scissors", cost: 10, iterationAmount: 0, count: 0}  ;
        // this.costIncrease = 1;
        this.iterationIncrease = 0.005;
        this.costMult = 1.1;
        this.iterationMult = 1;  
    }
}