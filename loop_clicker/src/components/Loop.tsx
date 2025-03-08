// import elastic_placeholder from "/assets/elastic_placeholder.png"
import broken_elastic_bit_01 from "/assets/broken_elastic_bit_01.png"
import { useLoopStore } from "../oop/loop/useLoopStore";
import Loop from "../oop/loop/Loop";
import numToStr from "../oop/numToStr";


export default function LoopComponent ({x, loop, incrementAmount: amountPerClick}: {x: number, loop: Loop, incrementAmount: number}) {
    
    let width: number = 100;
    let height: number = 100;
    const top: number = useLoopStore(loop) - (height / 2);
    const left: number = x - (width / 2);

    // let incrementAmountPerClick: number = (incrementAmount * 30) + 1;
    let incrementAmountStr: string = numToStr(amountPerClick);

    return (
        <>
            <div
                className="loop"
                style={{
                    left: `${left}px`,
                    top: `${top}px`,
                    //moved position absoute into App.css
                    width: `${width}px`,
                    height: `${height}px`,
                }}
            >
                <img 
                src={broken_elastic_bit_01}
                draggable="false"
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                }}
                />
                <div
                    className="textDivInLoop"
                    style={{
                        //move position: abolute into App.css
                        top: `${height / 2}px`,
                        left: `${width / 2}px`
                    }}
                >
                    <p>
                        {incrementAmountStr}
                    </p>
                </div>
            </div>
        </>
    )
}