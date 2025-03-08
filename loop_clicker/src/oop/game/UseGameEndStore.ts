import GameEnd from "./GameEnd";
import { useSyncExternalStore } from "react";

export function UseGameEndStore(GameEnd: GameEnd) {
    return useSyncExternalStore (
        (callback) => GameEnd.subscribe(callback),
        () => GameEnd.getIsGameEnded()
    );
}