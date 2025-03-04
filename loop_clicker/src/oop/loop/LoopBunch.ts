import Loop from "./Loop";

type Listener = () => void;

export default class LoopBunch {
    private state: Loop[] = [];
    private listners: Listener[] = [];

    public clickCreateLoop(x: number, y:number) {
        const loop = new Loop(x, y);
        this.state.push(loop);

        setTimeout(() => {
            this.state.filter((l) => l !== loop);
        }, 1000);
        this.notify();
    }

    public subscribe(listner: Listener) { 
        this.listners.push(listner);
            return () => {
                this.listners = this.listners.filter((l) => l !== listner);
            }
    }

    private notify() {
        this.listners.forEach((listener) => listener());
    }

    public getState() {
        return this.state;
    }
}