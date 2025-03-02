import Score from "../game/Score";
/**
 * this class increases the score iterator, it also keeps track of the amnount to iterate the score iterator, and 
 * the cost of the upgrade which also increases. it has a state which the UpgradeComponent.tsx is subscribed to.
 */

type Listener = () => void;

export default class Upgrade {
        protected score: Score
        protected costIncrease: number; //the amount the cost increases, this increases with each level.
        protected iterationIncrease: number; //the amount the iteraction increases with each level, this increases with each level.
        protected iterationMult: number; //the amount the iteration increase multiplies with each level.
        protected costMult: number; //the amount the cost cost increase multiplies with each level.
        protected state : {name: string; cost: number; iterationAmount: number; count: number; canAfford: boolean};
        private listeners: Listener[] = [];

        constructor (score: Score) {
            this.score = score;
            this.iterationIncrease = 0;
            this.iterationMult = 0;
            this.costIncrease = 0;
            this.costMult = 0;
            this.state = {name: "scissors", cost: 0, iterationAmount: 0, count: 0, canAfford: false};
        }

        public getState() {
            return this.state;
        }

    public incrementLevel() {
        if (this.score.isAfford(this.state.cost)) {
            this.score.subtractScore(this.state.cost);
            this.iterationIncrease *= this.iterationMult;
            let cost = this.state.cost * this.costMult
            this.state = {name: this.state.name, cost: cost,
                iterationAmount: this.state.iterationAmount + this.iterationIncrease, count: this.state.count + 1,
            canAfford: this.score.isAfford(cost)};
            this.score.addIncrementAmount(this.state.iterationAmount);
            this.notify();
        };
    }

    public subscribe(listener: Listener) { 
        this.listeners.push(listener);
            return () => {
                this.listeners = this.listeners.filter((l) => l !== listener);
            }
    }

    public update() {
        this.state = {canAfford : this.score.isAfford(this.state.cost),
             name: this.state.name, cost: this.state.cost, iterationAmount: this.state.iterationAmount, count: this.state.count}
    }

    private notify() {
        this.listeners.forEach((listener) => listener());
    }
}