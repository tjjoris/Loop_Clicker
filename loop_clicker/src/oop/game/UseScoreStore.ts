import { useSyncExternalStore } from "react";
import Score from "./Score";

export function useScoreStore(scoreStore: Score) {
    return useSyncExternalStore(
        (callback) => scoreStore.subscribe(callback),
        () => scoreStore.getScore()
    );
}