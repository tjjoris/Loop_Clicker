// import elastic_placeholder from "/assets/elastic_placeholder.png"
import broken_elastic_bit_01 from "/assets/broken_elastic_bit_01.png"
import broken_elastic_bit_02 from "/assets/Broken_Elastic_Bit_02.png"
import broken_elastic_bit_03 from "/assets/broken_elastic_bit_03.png"
import broken_elastic_bit_04 from "/assets/broken_elastic_bit_04.png"
import broken_elastic_bit_05 from "/assets/broken_elastic_bit_05.png"

import { useLoopStore } from "../oop/loop/useLoopStore";
import Loop from "../oop/loop/Loop";
import numToStr from "../oop/numToStr";


export default function LoopComponent ({x, loop, incrementAmount: amountPerClick}: {x: number, loop: Loop, incrementAmount: number}) {
    
    let width: number = 100;
    let height: number = 100;
    const top: number = useLoopStore(loop) - (height / 2);
    const left: number = x - (width / 2);
    const brokenElasticSprites : string[] = [
        broken_elastic_bit_01, 
        broken_elastic_bit_02, 
        broken_elastic_bit_03, 
        broken_elastic_bit_04,
        broken_elastic_bit_05
    ];
    const rotationDeg: number = loop.getRotationDeg();
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
                src={brokenElasticSprites[loop.getLoopSpriteIndex()]}
                draggable="false"
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    transform: `rotate(${rotationDeg}deg)`
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