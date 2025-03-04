/**
 * Score.ts
 * game class stores overall score.
 */

import ScoreUpgradeObserver from "./ScoreUpgradeObserver";


import LoopHandler from "../loop/LoopHandler";

type Listener = () => void;

export default class Score {
    private state: {score: number; incrementAmount: number; counter: number} = {score: 0, incrementAmount: 0, counter: 0};  //score
    private listeners: Listener[] = []; //listeners subscribed to.
    private loopHandler : LoopHandler;
    private scoreUpgradeObserver: ScoreUpgradeObserver;
    private intervalId: number | null = null;
    private amountPerClick: number = 1;
    // private animationFrameId: number | null = null;

    constructor(loopHandler: LoopHandler, scoreUpgradeObserver: ScoreUpgradeObserver) {
        this.loopHandler = loopHandler;
        this.scoreUpgradeObserver = scoreUpgradeObserver;
        this.startInterval(1000/30);
        // this.startAnimationLoop();
    }

    /**
     * increase the score by an amount.
     * @param amount 
     */
    public incrementScore(amount: number) {
        this.state = {score: this.state.score + amount, incrementAmount: this.state.incrementAmount, counter: this.state.counter + 1}
        if (this.state.counter > 30) {
            this.state = {score: this.state.score, incrementAmount: this.state.incrementAmount, counter: 0};
        }
        this.loopHandler.doChangeLoop(this.state.score);
        // console.log("incrememt by: " + this.state.incrementAmount)
        this.scoreUpgradeObserver.noitify();
        this.notify();
    }

    public getScore(){
        return this.state;
    }

    public getAmountPerClick() {
        return this.amountPerClick;
    }

    public subscribe(listener: Listener) { 
        this.listeners.push(listener);
            return () => {
                this.listeners = this.listeners.filter((l) => l !== listener);
            }
            
        console.log("useSyncExternalScore listeners " + this.listeners.length);
    }

    public addIncrementAmount (amount: number) {
        this.state = {score: this.state.score, incrementAmount: this.state.incrementAmount + amount, counter: this.state.counter};
        this.amountPerClick = 1 + (this.state.incrementAmount * 30)
        this.notify();
    }

    // private startAnimationLoop() {
    //     const loop = () => {
    //         this.incrementScore(this.state.incrementAmount);
    //         this.animationFrameId = window.requestAnimationFrame(loop);
    //     };
    //     this.animationFrameId = window.requestAnimationFrame(loop);
    // }

    private startInterval(rate: number) {
        if (this.intervalId != null) {
            clearInterval(this.intervalId);
        }
        this.intervalId = window.setInterval(() => {
            this.incrementScore(this.state.incrementAmount);
        } , rate);
    }

    public isAfford(amount: number): boolean {
        if (amount <= this.state.score) {
            return true;
        }
        return false;
    }

    public subtractScore(amount:number) {
        this.state = {score: this.state.score - amount, incrementAmount: this.state.incrementAmount, counter: this.state.counter};
        this.notify();
    }

    private notify() {
    this.listeners.forEach((listener) => listener());
    }
}