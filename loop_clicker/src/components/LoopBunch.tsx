import elastic_ball_placeholder from "/assets/elastic_ball_placeholder.png";

export default function LoopBunchComponent() {
    let left : number = 100;
    let top : number = 100;
    let width: number = 100;
    let height: number = 100;
    return (
        <>
            <img
            src={elastic_ball_placeholder}
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