import LoopBunch from "./LoopBunch";
import { useSyncExternalStore } from "react";

export function useLoopBunchStore(loopBunch: LoopBunch) {
    return useSyncExternalStore (
        (callback) => loopBunch.subscribe(callback),
        () => loopBunch.getState()
    );
}