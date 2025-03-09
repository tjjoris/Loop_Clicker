import Loop from "./Loop";

type Listener = () => void;

export default class LoopBunch {
    private state: {loops: Loop[]; rotation: number; scale: number} = {loops: [], rotation: 0, scale: 1};
    private listners: Listener[] = [];
    private intervalId: number | null = null;
    private rotationRate: number = 0.02;

    constructor() {
        this.startInterval();
    }

    private startInterval() {
        if (this.intervalId != null) {
            clearInterval(this.intervalId);
        }
        this.intervalId = window.setInterval(() => {
            this.animateLoopBunch();
        })
    }

    private animateLoopBunch() {
        let tempRotation = this.state.rotation + this.rotationRate;
        if (tempRotation > 360) {
            tempRotation = 0;
        }
        // this.state.rotation = tempRotation;
        this.state = { ...this.state, rotation: tempRotation};
        this.notify();
        // console.log("loop bunch rotation " + this.state.rotation);
    }

    public clickCreateLoop(x: number, y:number) {
        const loop = new Loop(x, y);
        this.state.loops = [...this.state.loops, loop];
        console.log("click create loop");
        this.notify();
        setTimeout(() => {
            this.state.loops = this.state.loops.filter((l) => l !== loop);
            console.log("removed " + this.state.loops.length);
            this.notify();
        }, 1000);
    }

    public subscribe(listner: Listener) { 
        this.listners.push(listner);
        console.log("loop bunch subscribing " + this.listners.length)
            return () => {
                this.listners = this.listners.filter((l) => l !== listner);
            }
    }

    private notify() {
        this.listners.forEach((listener) => listener());
        // console.log("loop bunch notified " + this.listners.length);
    }

    public getState() {
        return this.state;
        console.log("loop bunch get state")
    }
}