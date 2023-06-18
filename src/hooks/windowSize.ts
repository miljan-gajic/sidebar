import { useEffect, useLayoutEffect, useState } from "react";
import { useLocalStorage } from "./localStorage";
import { useUI } from "./uiContext";

export function useWindowSize() {
  const [size, setSize] = useState<Record<"width" | "height", number | null>>({
    width: null,
    height: null,
  });

  // Used instead of useEffect for better graphic performance
  useLayoutEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}

export const useSetCollapsedBasedOnWindowWidth = () => {
  const [localState, handleSetState] = useLocalStorage("UI", {});
  const size = useWindowSize();

  const { dispatch } = useUI();

  useEffect(() => {
    if (size.width && size.width <= 768) {
      dispatch({
        type: "addCollapsedMode",
        payload: true,
      });
      handleSetState({ ...localState, collapsed: true });
    }
    if (size.width && size.width > 768 && localState["collapsed"]) {
      dispatch({
        type: "addCollapsedMode",
        payload: false,
      });
      handleSetState({ ...localState, collapsed: false });
    }
  }, [dispatch, size]);
};
