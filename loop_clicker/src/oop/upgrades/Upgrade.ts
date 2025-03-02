
export default class Upgrade {
        protected name: string; //the name of the upgrade
        protected info: string; //info on the upgrade
        protected iterationAmount: number; //the current iteration amount, increases with each upgrade by iteraton by initialIteration
        protected cost: number; //the current cost of the upgrade
        protected count: number; //the count of this upgrade purchased
        protected costIncrease: number; //the amount the cost increases, this increases with each level.
        protected iterationIncrease: number; //the amount the iteraction increases with each level, this increases with each level.
        protected iterationMult: number; //the amount the iteration increase multiplies with each level.
        protected costMult: number; //the amount the cost cost increase multiplies with each level.

        constructor () {
            this.name = "placeholder name";
            this.info = "placholder info";
            this.count = 0;
            this.iterationIncrease = 0;
            this.iterationMult = 0;
            this.iterationAmount = 0;
            this.costIncrease = 0;
            this.costMult = 0;
            this.cost = 0;
        }
    public getName() {
        return this.name;
    }

    public getInfo() {
        return this.info;
    }

    public incrementLevel() {
        this.count ++;
        this.costIncrease *= this.costMult;
        this.cost += this.costIncrease;
        this.iterationIncrease *= this.iterationMult;
        this.iterationAmount += this.iterationIncrease;
        this.info = " level: " + this.count + " cost: " + this.cost + " amount: " + this.iterationAmount;
    }
}