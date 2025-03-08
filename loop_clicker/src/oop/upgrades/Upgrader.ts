import Upgrade from "./Upgrade";

export default class Upgrader {
    private upgrades : Upgrade[];

    constructor (upgrades: Upgrade[]) {
        this.upgrades = upgrades;
        this.upgrades[0].reveal();
    }

    public addLevel(upgrade: Upgrade) {
        upgrade;
    }

    public reveal(index: number) {
        this.upgrades[index].reveal();
    }
}