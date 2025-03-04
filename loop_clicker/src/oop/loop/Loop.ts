/**
 *the loop object, is displayed whenever the user clicks the loop bunch.
 */

export default class Loop {
    // protected state: { isEnabled: boolean; x: number; y: number; width: number; height: number; spriteName: string};
    private x: number;
    private y: number;

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
        this.y += amount;
    }

    public getX() {
        return this.x;
    }

    public getY() {
        return this.y;
    }
}