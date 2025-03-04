import Loop from "./Loop";

type Listener = () => void;

export default class LoopBunch {
    private state: Loop[] = [];
    private listners: Listener[] = [];

    public clickCreateLoop(x: number, y:number) {
        const loop = new Loop(x, y);
        this.state = [...this.state, loop];
        console.log("click create loop");
        this.notify();
        setTimeout(() => {
            this.state = this.state.filter((l) => l !== loop);
            console.log("removed " + this.state.length);
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
        console.log("loop bunch notified " + this.listners.length);
    }

    public getState() {
        return this.state;
        console.log("loop bunch get state")
    }
}