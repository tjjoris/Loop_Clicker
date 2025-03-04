import Upgrade from "../upgrades/Upgrade";

export default class ScoreUpgradeObserver {
    private upgrades: Upgrade[] = [];

    public subscribe(upgrade: Upgrade) {
        this.upgrades.push(upgrade);
        console.log("scoreUpgradeObserver listners " + this.upgrades.length)
    }

    public unsubscribe(upgrade: Upgrade) {
        this.upgrades.filter((u) => u != upgrade);
    }

    public noitify() {
        this.upgrades.forEach((upgrade) => {
            upgrade.update() ;
        })
    }
}