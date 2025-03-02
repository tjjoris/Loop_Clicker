import { useScoreStore } from "../oop/game/UseScoreStore";
import Score from "../oop/game/Score";

export default function ScoreComponent({scoreObject}: {scoreObject: Score}) {
    //set the number to the object state value
    const score: number = useScoreStore(scoreObject);
    let scoreDisplay = Math.floor(score);
    let decimalIndicator: string = ""
    if (scoreDisplay >= 1000000) {
        scoreDisplay = (scoreDisplay / 1000);
        decimalIndicator = " million";
    }
    let scoreDisplaySting: string = scoreDisplay.toString() + decimalIndicator;
    
    return (
        <>
            <h1>
                Score: {scoreDisplaySting}
            </h1>
        </>
    )
}