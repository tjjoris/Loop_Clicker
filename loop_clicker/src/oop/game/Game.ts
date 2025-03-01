
type Listener = () => void;

export default class Game {
    private score: number;

    public incrementScore(amount: number) {
        this.score += amount;
        notify();
    }
}