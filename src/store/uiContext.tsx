import { createContext, useMemo, useReducer } from "react";

// I have added a context here mostly to add another "data" layer to the app
// Just to showcase that you don't need to render prop pass children and prop drill
// To send data down the components chain. But there was no real need for context or redux, zustand, mobx, x-state etc...

type Action =
  | { type: "addActiveMenuItem"; payload: string }
  | { type: "addSystemWiseThemeMode"; payload: "dark" | "light" | "" }
  | { type: "addCollapsedMode"; payload: boolean };

type Dispatch = (action: Action) => void;

type State = {
  activeMenuItem: string;
  systemColorTheme: string;
  collapsed: boolean;
};

type UiProviderProps = { children: React.ReactNode };

export const UIStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

export const uiReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "addActiveMenuItem": {
      return {
        ...state,
        activeMenuItem: action.payload,
      };
    }
    case "addSystemWiseThemeMode": {
      return {
        ...state,
        systemColorTheme: action.payload,
      };
    }
    case "addCollapsedMode": {
      return {
        ...state,
        collapsed: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const UiProvider = ({ children }: UiProviderProps) => {
  const [state, dispatch] = useReducer(uiReducer, {
    activeMenuItem: "",
    systemColorTheme: "",
    collapsed: false,
  });
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <UIStateContext.Provider value={value}>{children}</UIStateContext.Provider>
  );
};
