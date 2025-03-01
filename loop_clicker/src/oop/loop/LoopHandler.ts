/**
 * Loop handler, creates Loops as they inherit from Loop.
 */

import Loop from "./Loop";
import Elastic from "./Elastic";
import LargeHadronCollider from "./LargeHadronCollider";

export default class LoopHandler {
    private loop: Loop | null;

    constructor () {
        this.loop = new Elastic();
    }

    public doChangeLoop(score: number) {
        if (score >= 10) {
            this.loop = new LargeHadronCollider();
        }
    }

}