import { useEffect, useState } from "react";
import { useLocalStorage } from "./localStorage";
import { useUI } from "./uiContext";

export const useReadAndSetSystemTheme = () => {
  const [localState, handleSetState] = useLocalStorage("UI", {});
  const [mode, setMode] = useState<"light" | "dark" | "">("");

  const { dispatch } = useUI();

  useEffect(() => {
    // Add listener to update styles
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => setMode(e.matches ? "dark" : "light"));

    // Setup dark/light mode for the first time
    setMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

    // Remove listener
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => setMode);
    };
  }, []);

  // This is to synchronize external state "Context" with internal state "mode"
  useEffect(() => {
    dispatch({
      type: "addSystemWiseThemeMode",
      payload: mode,
    });
    handleSetState({ ...localState, systemColorTheme: mode });
  }, [dispatch, mode]);
};
