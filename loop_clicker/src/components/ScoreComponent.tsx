import { useScoreStore } from "../oop/game/UseScoreStore";
import Score from "../oop/game/Score";
import numToStr from "../oop/numToStr";

export default function ScoreComponent({scoreObject}: {scoreObject: Score}) {
    //set the number to the object state value
    const state: {score: number; incrementAmount: number; counter: number} = useScoreStore(scoreObject);
    const score: number = state.score;
    const incrementAmount: number = state.incrementAmount;
    const clicksPerSecond: number = (incrementAmount);
    let scoreDisplay: number = Math.floor(score);
    let scoreDisplayStr : string = scoreDisplay.toString();
    scoreDisplayStr = numToStr(scoreDisplay);

    return (
        <div
            className="score"
        >
            <h2>
                Score: {scoreDisplayStr}
            </h2>
            <h3>
                clicks per second: {numToStr(clicksPerSecond)}
            </h3>
            <p>
                {/* counter: {counter} */}
            </p>
        </div>
    )
}