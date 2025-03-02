import Upgrade from "./Upgrade";
import ScissorsUpgrade from "./ScissorsUpgrade";
import Score from "../game/Score";
import ScoreUpgradeObserver from "../game/ScoreUpgradeObserver";
/**
 * this class tracks upgrades and if they are visible, thier sprite, and their text
 */

type Listener = () => void;

export default class Upgrades {
    private state : Upgrade[] = []
    private listeners : Listener[] = [];
    private scoreUpgradeObserver: ScoreUpgradeObserver;

    constructor(score: Score) {
        this.state[0] = new ScissorsUpgrade(score);
        this.scoreUpgradeObserver = new ScoreUpgradeObserver();
        this.scoreUpgradeObserver.subscribe(this.state[0]);
        this.notify();

    }

    public getState() {
        return this.state;
    }

    public subscribe(listener: Listener) { 
        this.listeners.push(listener);
            return () => {
                this.listeners = this.listeners.filter((l) => l !== listener);
            }
    }

    private notify() {
        this.listeners.forEach((listener) => listener());
    }   
}