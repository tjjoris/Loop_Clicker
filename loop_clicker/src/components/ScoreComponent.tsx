import { useScoreStore } from "../oop/game/UseScoreStore";
import Score from "../oop/game/Score";

export default function ScoreComponent({scoreObject}: {scoreObject: Score}) {
    //set the number to the object state value
    const score: number = useScoreStore(scoreObject);
    
    return (
        <>
            <h1>
                Score: {score}
            </h1>
        </>
    )
}