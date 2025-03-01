/**
 * game class stores overall score.
 */
type Listener = () => void;

export default class Score {
    private score: number = 0;  //score
    private listeners: Listener[] = []; //listeners subscribed to.

    /**
     * increase the score by an amount.
     * @param amount 
     */
    public incrementScore(amount: number) {
        this.score += amount;
        this.notify();
    }

    public getScore(){
        return this.score;
    }

    public subscribe(listener: Listener) { 
        this.listeners.push(listener);
            return () => {
                this.listeners = this.listeners.filter((l) => l !== listener);
            }
    }

    private notify() {
    this.listeners.forEach((listener) => listener());
    }
}