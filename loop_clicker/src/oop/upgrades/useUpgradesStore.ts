import { useSyncExternalStore } from "react";
import Upgrades from "./Upgrades";

export function useUpgradeStore(upgrades: Upgrades) {
    return useSyncExternalStore (
        (callback) => upgrades.subscribe(callback),
        () => upgrades.getState()
    );
}