/**
 * game class stores overall score.
 */


import LoopHandler from "../loop/LoopHandler";

type Listener = () => void;

export default class Score {
    private score: number = 0;  //score
    private listeners: Listener[] = []; //listeners subscribed to.
    private loopHandler : LoopHandler;

    constructor(loopHandler: LoopHandler) {
        this.loopHandler = loopHandler;
    }

    /**
     * increase the score by an amount.
     * @param amount 
     */
    public incrementScore(amount: number) {
        this.score += amount;
        this.loopHandler.doChangeLoop(this.score);
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

    private notify() {
    this.listeners.forEach((listener) => listener());
    }
}