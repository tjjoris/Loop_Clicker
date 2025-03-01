import React from "react";

export default function LoopBunch() {
    let left : number = 100;
    let top : number = 100;
    let width: number = 100;
    let height: number = 100;
    return (
        <>
            <img
            src={`/src/assets/elastic_ball_placeholder.png`}
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