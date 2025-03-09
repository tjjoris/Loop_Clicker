// import elastic_ball_placeholder from "/assets/elastic_ball_placeholder.png";
import elastic_ball_image from "/assets/Elastic_Ball_lite2.png";
import Score from "../oop/game/Score";
import LoopComponent from "./Loop";
import LoopBunch from "../oop/loop/LoopBunch";
import { useLoopBunchStore } from "../oop/loop/useLoopBunchStore";


export default function LoopBunchComponent({score, loopBunch}:{score: Score, loopBunch: LoopBunch}) {
    // const [clickedLoops, setClickedLoops] = useState<{id:number; x: number; y: number}[]>([]);
    const state = useLoopBunchStore(loopBunch);
    const loops = state.loops;
    const scoreObject = score;
    let left : number = 100;
    let top : number = 100;
    // let width: number = 200;
    // let height: number = 200;
    const amountPerClick = score.getAmountPerClick();
    
    console.log("loop bunch re-rendered");
    // const clickToAddLoop = ((event: React.MouseEvent) => {
    //     console.log("clicked in loop");
    //     scoreObject.incrementScore(1);
    //     const id = Date.now();
    //     setClickedLoops((prev) => [...prev, {id: id, x: event.clientX, y: event.clientY}]);

    //     //remove after 2 seconds
    //     setTimeout(() => {
    //         setClickedLoops((prev) => prev.filter((item) => item.id !== id));
    //     }, 1000);
    // })
    const clickEvent = ((event: React.MouseEvent) => {
        console.log("click event");
        scoreObject.incrementScore(amountPerClick);
        loopBunch.clickCreateLoop(event.clientX, event.clientY);
    })
    return (
        <>
            <img
            className="loopBunch"
            src={elastic_ball_image}
            draggable="false"
            onClick={clickEvent}
            style={{
                left: `${left}px`,
                top: `${top}px`,
                // moved position absolute into App.css
                // width: `${width}px`,
                // height: `${height}px`
            }}
            />
            {
                loops.map((clickedLoop, index) => {
                    return (
                        <LoopComponent key={index} x={clickedLoop.getX()} loop = {clickedLoop} incrementAmount = {amountPerClick}/>
                    )
                })
            }
        </>
    )
}