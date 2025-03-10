import Luke from "../../assets/Luke.png"
import Kay from "../../assets/Kay.png"
import Jake from "../../assets/Jake.png"

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
                    <div
                        className="teamMembers"
                    >   
                        <div
                            className="teamMember"
                        >
                            <div
                                className="teamMemberName"
                            >
                                Art: Kaidan Kosmos
                            </div>
                            <div>
                                <img src={Kay}
                                    className="teamImage"
                                />
                            </div>
                        </div>
                        <div
                            className="teamMember"
                        >
                            <div
                                className="teamMemberName"
                            >
                                Programming: Luke Johnson
                            </div>
                            <div>
                                <img src={Luke}
                                    className="teamImage"
                                />
                            </div>
                        </div>
                        <div
                            className="teamMember"
                        >
                            <div
                                className="teamMemberName"
                            >
                                Consultation: Jacob Johnson
                            </div>
                            <div>
                                <img src={Jake}
                                    className="teamImage"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}