import elastic_placeholder from "/assets/elastic_placeholder.png"

export default function LoopComponent ({x, y}: {x: number, y: number}) {
    let left : number =  x;
    let top : number = y;
    let width: number = 100;
    let height: number = 100;
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