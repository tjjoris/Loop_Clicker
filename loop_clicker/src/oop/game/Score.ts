/**
 * game class stores overall score.
 */

import ScoreUpgradeObserver from "./ScoreUpgradeObserver";


import LoopHandler from "../loop/LoopHandler";

type Listener = () => void;

export default class Score {
    private score: number = 0;  //score
    private listeners: Listener[] = []; //listeners subscribed to.
    private loopHandler : LoopHandler;
    private incrementAmount: number = 0;
    private scoreUpgradeObserver: ScoreUpgradeObserver;

    constructor(loopHandler: LoopHandler, scoreUpgradeObserver: ScoreUpgradeObserver) {
        this.loopHandler = loopHandler;
        this.scoreUpgradeObserver = scoreUpgradeObserver;
        this.startInterval(1000/30);
    }

    /**
     * increase the score by an amount.
     * @param amount 
     */
    public incrementScore(amount: number) {
        this.score += amount;
        this.loopHandler.doChangeLoop(this.score);
        this.scoreUpgradeObserver.noitify();
        this.notify();
    }

    public getScore(){
        return this.score;
    }

    public subscribe(listener: Listener) { 
        this.listeners.push(listener);
            return () => {
                this.listeners = this.listeners.filter((l) => l !== listener);
            }
    }

    public addIncrementAmount (amount: number) {
        this.incrementAmount += amount;
    }

    private startInterval(rate: number) {
        setInterval(() => {
            this.increment();
        } , rate);
    }

    public isAfford(amount: number): boolean {
        if (amount <= this.score) {
            return true;
        }
        return false;
    }

    public subtractScore(amount:number) {
        this.score -= amount;
    }

    private increment() {
        this.score += this.incrementAmount;
        this.scoreUpgradeObserver.noitify();
        this.notify();
    }

    private notify() {
    this.listeners.forEach((listener) => listener());
    }
}