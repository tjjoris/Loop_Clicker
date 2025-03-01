import Loop from "./Loop";

export default class LargeHadronCollider extends Loop {

    constructor () {
        //call the super constructor this inherits from.
        super();
        //set the new state values.
        this.state = { 
            isEnabled: this.state.isEnabled,
            x: this.state.x,
            y: this.state.y,
            width: this.state.width,
            height: this.state.height,
            spriteName: "large_hadron_collider"};
    }
}