import elastic_placeholder from "/assets/elastic_placeholder.png"
import { useLoopStore } from "../oop/loop/useLoopStore";
import Loop from "../oop/loop/Loop";

export default function LoopComponent ({x, loop, incrementAmount}: {x: number, loop: Loop, incrementAmount: number}) {
    const left: number = x;
    let width: number = 30;
    let height: number = 30;
    const top: number = useLoopStore(loop);
    let incrementAmountPerClick: number = (incrementAmount * 30) + 1;
    let incrementAmountStr: string = incrementAmountPerClick.toFixed(2);

    return (
        <>
            <div
                style={{
                    left: `${left}px`,
                    top: `${top}px`,
                    position: "absolute",
                    width: `${width}px`,
                    height: `${height}px`,
                    pointerEvents: "none"}}
            >
                <img 
                src={elastic_placeholder}
                draggable="false"
                style={{
                //     left: `${left}px`,
                //     top: `${top}px`,
                //     position: "absolute",
                    width: `${width}px`,
                    height: `${height}px`,
                //     pointerEvents: "none"
                }}
                />
                    <p
                        style={{
                            color: "black"
                        }}
                    >
                        {incrementAmountStr}
                    </p>
            </div>
        </>
    )
}