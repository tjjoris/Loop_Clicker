import elastic_placeholder from "/assets/elastic_placeholder.png"
import { useState, useEffect } from "react";

export default function LoopComponent ({x, y}: {x: number, y: number}) {
    const left: number = x;
    let width: number = 30;
    let height: number = 30;
    const [currentY, setCurrentY] = useState(y);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentY((prevY) => prevY - 1); //move up 1 pixel
        }, 30);
        return () => clearInterval(interval); //cleanup on unmount
    }, []);
    return (
        <>
            <img 
            src={elastic_placeholder}
            draggable="false"
            style={{
                left: `${left}px`,
                top: `${currentY}px`,
                position: "absolute",
                width: `${width}px`,
                height: `${height}px`
            }}
            />
        </>
    )
}