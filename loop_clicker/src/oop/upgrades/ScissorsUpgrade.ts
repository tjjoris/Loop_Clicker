import Upgrade from "./Upgrade";

export default class ScissorsUpgrade extends Upgrade {

    constructor() {
        super();
        this.name = "scissors";
        this.info = "cuts an elastic band, not wasteful at all.";
    }
}