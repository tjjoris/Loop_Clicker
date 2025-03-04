/**
 *the loop object, is displayed whenever the user clicks the loop bunch.
 */

 type Listener = () => void;
export default class Loop {
    // protected state: { isEnabled: boolean; x: number; y: number; width: number; height: number; spriteName: string};
    private x: number;
    private y: number;
    private listners: Listener[] = [];

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.startInterval(30);
        // this.state = {
        //     isEnabled: true,
        //     x: 100,
        //     y: 100,
        //     width: 100,
        //     height: 100,
        //     spriteName: "elastic"
        // }
    }
    startInterval(interval: number) {
        setInterval(() => {
            this.incrementY(-1)
        }, interval);
    }

    private incrementY(amount: number) {
        // this.y += amount;
        this.notify();
    }

    public getX() {
        return this.x;
    }

    public getY() {
        return this.y;
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
}