import Upgrade from "./Upgrade";

export default class ScissorsUpgrade extends Upgrade {

    constructor() {
        super();
        this.iterationAmount = 1;
        this.cost = 3;
        this.name = "scissors";
        this.info = "cuts an elastic band, not wasteful at all.";        
    }
}