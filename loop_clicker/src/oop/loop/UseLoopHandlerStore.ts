import { useSyncExternalStore } from "react";
import LoopHandler from "./LoopHandler";

/**
 * this is the hook for linking Loop handler to the app which creates destoryed loops.
 */

export function useLoopHandlerStore(loopHandler: LoopHandler) {
    return useSyncExternalStore (
        (callback) => loopHandler.subscribe(callback),
        () => loopHandler.getLoop()
    );
}