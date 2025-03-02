import { useSyncExternalStore } from "react";
import Upgrades from "./Upgrades";

export function useUpgradesStore(upgrades: Upgrades) {
    return useSyncExternalStore (
        (callback) => upgrades.subscribe(callback),
        () => upgrades.getState()
    );
}