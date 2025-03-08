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
                <p>
                    Congratulations, you broke the game loop!
                </p>
                <h2>
                    Credits:
                </h2>
                <p>
                    Art: Kay
                </p>
                <p>
                    Programming: Luke
                </p>
                <p>
                    Direction: Jacob
                </p>
            </div> 
        );
    }
}