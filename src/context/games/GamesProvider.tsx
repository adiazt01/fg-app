import { createContext } from "react";
import { gamesType } from "../../types/gamesType";

const initialState:gamesType = [{
  title: "",
  id: 0,
}];

export const GameProvider = createContext<gamesType>(initialState);
