import { useScoreStore } from "../oop/game/UseScoreStore";
import Score from "../oop/game/Score";

export default function ScoreComponent({scoreObject}: {scoreObject: Score}) {
    //set the number to the object state value
    const state: {score: number; incrementAmount: number; counter: number} = useScoreStore(scoreObject);
    const score: number = state.score;
    const incrementAmount: number = state.incrementAmount;
    const clicksPerSecond: number = (incrementAmount * 30);
    const clicksPerSecondStr: string = clicksPerSecond.toFixed(2);
    let scoreDisplay: number = Math.floor(score);
    let decimalIndicator: string = ""
    let scoreDisplayStr : string = scoreDisplay.toString();
    const counter: number = state.counter;
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
                // left:"300px",
                // top:"100px"
            }}
        >
            <h2>
                Score: {scoreDisplayStr}
            </h2>
            <h3>
                clicks per second: {clicksPerSecondStr}
            </h3>
            <p>
                {/* counter: {counter} */}
            </p>
        </div>
    )
}