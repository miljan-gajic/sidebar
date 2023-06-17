import { useCallback, useEffect, useState } from "react";
import { useUI } from "./uiContext";

export function useLocalStorage(key: string, initialValue: any) {
  const readValue = useCallback(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  }, [key, initialValue]);

  const [localState, setLocalState] = useState(readValue);
  const handleSetState = useCallback(
    (value: any) => {
      try {
        const nextState =
          typeof value === "function" ? value(localState) : value;
        window.localStorage.setItem(key, JSON.stringify(nextState));
        setLocalState(nextState);
        window.dispatchEvent(new Event("local-storage"));
      } catch (e) {
        console.warn(e);
      }
    },
    [key, localState]
  );

  return [localState, handleSetState];
}

export const useLoadLSItemsToContext = () => {
  const [localState] = useLocalStorage("UI", {});

  const { dispatch } = useUI();

  useEffect(() => {
    dispatch({
      type: "addActiveMenuItem",
      payload: localState["activeMenuItem"],
    });
    dispatch({
      type: "addCollapsedMode",
      payload: localState["collapsed"],
    });
    dispatch({
      type: "addSystemWiseThemeMode",
      payload: localState["systemColorTheme"],
    });
  }, [localState]);
};
