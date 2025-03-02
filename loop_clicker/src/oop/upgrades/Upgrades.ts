import Upgrade from "./Upgrade";
import ScissorsUpgrade from "./ScissorsUpgrade";
/**
 * this class tracks upgrades and if they are visible, thier sprite, and their text
 */

export default class Upgrades {
    private state : {upgrade: Upgrade; name: string; info: string}[] = [];

    constructor() {
        let scissorsUpgrade: Upgrade = new ScissorsUpgrade();
        this.state[0] = {upgrade: scissorsUpgrade, name: scissorsUpgrade.getName(), info: scissorsUpgrade.getInfo()}
    }
}