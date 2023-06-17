import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UiProvider } from "./store/uiContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* Realistically I would try to go as low into the Component tree as possible with Context because of re-rendering the whole tree */}
    {/* ...and have a context provider for all branches of the tree, but here since we only have static pieces of UI and dummy content it is safe to do it */}
    <UiProvider>
      <App />
    </UiProvider>
  </React.StrictMode>
);
