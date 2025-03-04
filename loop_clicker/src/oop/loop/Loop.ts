/**
 * the loop object, used for displaying if a loop is visible on the screen, it's position, rotation, and sprite.
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