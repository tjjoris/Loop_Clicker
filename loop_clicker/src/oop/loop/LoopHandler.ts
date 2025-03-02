/**
 * Loop handler, creates Loops as they inherit from Loop.
 */

import Loop from "./Loop";
// import Elastic from "./Elastic";
import LargeHadronCollider from "./LargeHadronCollider";

type Listener = () => void;

export default class LoopHandler {
    private loop: Loop | null = null;
    private listeners : Listener[] = [];

    constructor () {
        // this.loop = new Elastic();
    }

    public doChangeLoop(score: number) {
        if (score >= 10) {
            this.loop = new LargeHadronCollider();
            this.notify();
        }
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

    public getLoop() {
        return this.loop;
    }

}