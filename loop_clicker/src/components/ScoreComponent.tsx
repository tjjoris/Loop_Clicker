import { useScoreStore } from "../oop/game/UseScoreStore";
import Score from "../oop/game/Score";

export default function ScoreComponent({scoreObject}: {scoreObject: Score}) {
    //set the number to the object state value
    const score: number = useScoreStore(scoreObject);
    let scoreDisplay: number = Math.floor(score);
    let decimalIndicator: string = ""
    let scoreDisplayStr : string = scoreDisplay.toString();
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
                Score: {scoreDisplayStr}
            </h1>
        </div>
    )
}