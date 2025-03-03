import { useScoreStore } from "../oop/game/UseScoreStore";
import Score from "../oop/game/Score";

export default function ScoreComponent({scoreObject}: {scoreObject: Score}) {
    //set the number to the object state value
    const state: {score: number; incrementAmount: number; counter: number} = useScoreStore(scoreObject);
    let score: number = state.score;
    let incrementAmount: number = state.incrementAmount;
    let clicksPerSecond: number = incrementAmount * 30;
    let scoreDisplay: number = Math.floor(score);
    let decimalIndicator: string = ""
    let scoreDisplayStr : string = scoreDisplay.toString();
    let counter: number = state.counter;
    if (scoreDisplay >= 1000000) {
        scoreDisplay = (scoreDisplay / 1000);
        decimalIndicator = " million";
        scoreDisplayStr = scoreDisplay.toFixed(2);
    }
    scoreDisplayStr = scoreDisplayStr + decimalIndicator;
    
    return (
        <div
            style={{
                position: "absolute",
                left:"300px",
                top:"100px"
            }}
        >
            <h1>
                Score: {score}
            </h1>
            <h2>
                clicks per second: {clicksPerSecond}
            </h2>
            <p>
                counter: {counter}
            </p>
        </div>
    )
}