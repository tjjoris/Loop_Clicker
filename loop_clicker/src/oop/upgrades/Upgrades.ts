import Upgrade from "./Upgrade";
// import ScissorsUpgrade from "./ScissorsUpgrade";
import Score from "../game/Score";
import ScoreUpgradeObserver from "../game/ScoreUpgradeObserver";
import BasicRepeatableUpgrade from "./BasicRepeatableUpgrade";
/**
 * this class tracks upgrades and if they are visible, thier sprite, and their text
 */

type Listener = () => void;

export default class Upgrades {
    private state : Upgrade[] = []
    private listeners : Listener[] = [];
    private scoreUpgradeObserver: ScoreUpgradeObserver;
    private upgradesData: {name: string; description: string; cost: number; incrementAmount: number; costMult: number}[]

/**
 * 
 * @param score 
 * @param scoreUpgradeObserver 
 * @param upgradesData the object taken from data.json containing all upgrades.
 */
    constructor(score: Score, scoreUpgradeObserver: ScoreUpgradeObserver,
         upgradesData:{name: string; description: string; cost: number; incrementAmount: number; costMult: number}[] ) {
        this.scoreUpgradeObserver = scoreUpgradeObserver;
        upgradesData.forEach((upgradeData, index) => {
            this.state[index] = new BasicRepeatableUpgrade(score, upgradeData, index);            

            this.scoreUpgradeObserver.subscribe(this.state[index]);
        })
        console.log("constructor upgrades called");
        this.notify();
        this.upgradesData = upgradesData;
        this.upgradesData;
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