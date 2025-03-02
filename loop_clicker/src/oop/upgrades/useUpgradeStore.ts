import { useSyncExternalStore } from "react";
import Upgrade from "./Upgrade";

export function useUpgradeStore(upgrade: Upgrade) {
    return useSyncExternalStore (
        (callback) => upgrade.subscribe(callback),
        () => upgrade.getState()
    );
}