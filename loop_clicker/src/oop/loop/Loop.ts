/**
 *the loop object, is displayed whenever the user clicks the loop bunch.
 */

export default class Loop {
    protected state: { isEnabled: boolean; x: number; y: number; width: number; height: number; spriteName: string};


    constructor() {
        this.state = {
            isEnabled: true,
            x: 100,
            y: 100,
            width: 100,
            height: 100,
            spriteName: "elastic"
        }
    }
}