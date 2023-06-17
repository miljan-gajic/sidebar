import { UIStateContext } from "@/store/uiContext";
import { useContext } from "react";

export const useUI = () => {
  const context = useContext(UIStateContext);
  if (context === undefined) {
    throw new Error("useUI must be used within a UiProvider");
  }
  return context;
};
