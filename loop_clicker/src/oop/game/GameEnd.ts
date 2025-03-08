/**
 * game end class, used for storing when the game has ended to be used
 * by the game end component.
 */

type Listener = () => void;

export default class GameEnd {
    private listeners: Listener[] = [];
    private isGameEnded: boolean = false;

    public subscribe(listeners: Listener) { 
        this.listeners.push(listeners);
            return () => {
                this.listeners = this.listeners.filter((l) => l !== listeners);
            }
    }

    public endTheGame() {
        this.isGameEnded = true;
        this.notify();
    }

    public getIsGameEnded() {
        return this.isGameEnded;
    }

    private notify() {
        this.listeners.forEach((listener) => listener());
    }


}