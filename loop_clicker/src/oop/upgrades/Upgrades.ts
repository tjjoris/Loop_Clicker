import Upgrade from "./Upgrade";
import ScissorsUpgrade from "./ScissorsUpgrade";
import Score from "../game/Score";
/**
 * this class tracks upgrades and if they are visible, thier sprite, and their text
 */

type Listener = () => void;

export default class Upgrades {
    private state : {upgrade: Upgrade; name: string; info: string}[] = [];
    private listeners : Listener[] = [];

    constructor(score: Score) {
        let scissorsUpgrade: Upgrade = new ScissorsUpgrade(score);
        this.state[0] = {upgrade: scissorsUpgrade, name: scissorsUpgrade.getName(), info: scissorsUpgrade.getInfo()}
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