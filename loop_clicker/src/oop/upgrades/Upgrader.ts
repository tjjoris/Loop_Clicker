import Upgrade from "./Upgrade";

export default class Upgrader {
    private upgrades : Upgrade[];

    constructor (upgrades: Upgrade[]) {
        this.upgrades = upgrades;
    }
}