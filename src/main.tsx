import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GameContext } from "./context/games/GamesState.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GameContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GameContext>
);
