import elastic_ball_placeholder from "/assets/elastic_ball_placeholder.png";
import Score from "../oop/game/Score";
import { useState } from "react";
import LoopComponent from "./Loop";


export default function LoopBunchComponent({score}:{score: Score}) {
    const [clickedLoops, setClickedLoops] = useState<{id:number; x: number; y: number}[]>([]);
    const scoreObject = score;
    let left : number = 100;
    let top : number = 100;
    let width: number = 100;
    let height: number = 100;

    const clickToAddLoop = ((event: React.MouseEvent) => {
        console.log("clicked in loop");
        scoreObject.incrementScore(1);
        const id = Date.now();
        setClickedLoops((prev) => [...prev, {id: id, x: event.clientX, y: event.clientY}]);

        //remove after 2 seconds
        setTimeout(() => {
            setClickedLoops((prev) => prev.filter((item) => item.id !== id));
        }, 1000);
    })
    return (
        <>
            <img
            src={elastic_ball_placeholder}
            draggable="false"
            onClick={clickToAddLoop}
            style={{
                left: `${left}px`,
                top: `${top}px`,
                position: "absolute",
                width: `${width}px`,
                height: `${height}px`
            }}
            />
            {
                clickedLoops.map((clickedLoop) => {
                    return (
                        <LoopComponent x={clickedLoop.x} y={clickedLoop.y}/>
                    )
                })
            }
        </>
    )
}