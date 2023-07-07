import { createContext } from "react";
import { gamesType } from "../../types/gamesType";

export const GameProvider = createContext<gamesType>([]);
