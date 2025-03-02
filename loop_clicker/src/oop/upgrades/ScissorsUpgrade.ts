import Upgrade from "./Upgrade";
import Score from "../game/Score";

export default class ScissorsUpgrade extends Upgrade {

    constructor(score: Score) {
        super(score);
        this.iterationAmount = 1;
        this.cost = 3;
        this.name = "scissors";
        this.info = "cuts an elastic band, not wasteful at all.";        
    }
}