import Upgrade from "./Upgrade";
import Score from "../game/Score";

export default class ScissorsUpgrade extends Upgrade {

    constructor(score: Score) {
        super(score);
        this.state = {name: "scissors", cost: 3, iterationAmount: 0.01, count: 0}    
    }
}