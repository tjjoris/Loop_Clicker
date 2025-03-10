import { useScoreStore } from "../oop/game/UseScoreStore";
import Score from "../oop/game/Score";
import numToStr from "../oop/numToStr";
import GameEnd from "../oop/game/GameEnd";
import { UseGameEndStore } from "../oop/game/UseGameEndStore";

export default function ScoreComponent({scoreObject, gameEnd}: {scoreObject: Score, gameEnd: GameEnd}) {
    const gameEndState = UseGameEndStore(gameEnd);
    //set the number to the object state value
    const state: {score: number; incrementAmount: number; counter: number} = useScoreStore(scoreObject);
    const score: number = state.score;
    const incrementAmount: number = state.incrementAmount;
    const clicksPerSecond: number = (incrementAmount);
    let scoreDisplay: number = Math.floor(score);
    let scoreDisplayStr : string = scoreDisplay.toString();
    scoreDisplayStr = numToStr(scoreDisplay);

    if (gameEndState) {
        return (
            <></>
        )
    } else {
        return (
            <div
                className="score"
            >
                <h2>
                    Points: {scoreDisplayStr}
                </h2>
                <h3>
                    Loops destroyed per second: {numToStr(clicksPerSecond)}
                </h3>
                <p>
                    {/* counter: {counter} */}
                </p>
            </div>
        )
    }
}