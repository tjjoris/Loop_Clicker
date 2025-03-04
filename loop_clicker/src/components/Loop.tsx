import elastic_placeholder from "/assets/elastic_placeholder.png"
import { useLoopStore } from "../oop/loop/useLoopStore";
import Loop from "../oop/loop/Loop";

export default function LoopComponent ({x, loop}: {x: number, loop: Loop}) {
    const left: number = x;
    let width: number = 30;
    let height: number = 30;
    const top: number = useLoopStore(loop);

    return (
        <>
            <img 
            src={elastic_placeholder}
            draggable="false"
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