import Upgrade from "./Upgrade";

export default class Upgrader {
    private upgrades : Upgrade[];

    constructor (upgrades: Upgrade[]) {
        this.upgrades = upgrades;
    }

    public addLevel(upgrade: Upgrade) {

    }

    public reveal(index: number) {
        this.upgrades[index].reveal();
    }
}