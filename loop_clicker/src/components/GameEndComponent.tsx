import GameEnd from "../oop/game/GameEnd";
import { UseGameEndStore } from "../oop/game/UseGameEndStore";

export default function GameEndComponent ({gameEnd}: {gameEnd: GameEnd}) {
    const isGameEnd: boolean = UseGameEndStore(gameEnd);
    console.log("game end component")
    if (isGameEnd == false) {
        return null;
    } else {
        return (
            <div
                className="gameEnd"
            >
                <div>
                    <h1>
                        Congratulations, you broke the game loop!
                    </h1>
                    <br></br>
                    <h2>
                        Credits:
                    </h2>
                    <br></br>
                    <p>
                        Art: Kaidan Kosmos
                    </p>
                    <br></br>
                    <p>
                        Programming: Luke Johnson
                    </p>
                    <br></br>
                    <p>
                        Consultation: Jacob Johnson
                    </p>
                </div>
            </div> 
        );
    }
}