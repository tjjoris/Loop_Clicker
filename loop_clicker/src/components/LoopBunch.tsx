import elastic_ball_placeholder from "/assets/elastic_ball_placeholder.png";
import Score from "../oop/game/Score";
import { useState } from "react";

export default function LoopBunchComponent({score}:{score: Score}) {
    const [clickedLoops, setClickedLoops] = useState<{id:number}[]>([]);
    const scoreObject = score;
    let left : number = 100;
    let top : number = 100;
    let width: number = 100;
    let height: number = 100;

    const clickToAddLoop = (() => {
        const id = Date.now();
        setClickedLoops((prev) => [...prev, {id}]);

        //remove after 2 seconds
        setTimeout(() => {
            setClickedLoops((prev) => prev.filter((item) => item.id !== id));
        }, 2000);
    })
    return (
        <>
            <img
            src={elastic_ball_placeholder}
            draggable="false"
            onClick={() => {scoreObject.incrementScore(1);}}
            style={{
                left: `${left}px`,
                top: `${top}px`,
                position: "absolute",
                width: `${width}px`,
                height: `${height}px`
            }}
            />
        </>
    )
}