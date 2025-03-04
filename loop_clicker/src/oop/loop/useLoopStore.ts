import Loop from "./Loop";
import { useSyncExternalStore } from "react";

export function useLoopStore(loop: Loop) {
    return useSyncExternalStore (
        (callback) => loop.subscribe(callback),
        () => loop.getY()
    );
}