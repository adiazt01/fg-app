import { ReactNode } from "react";
import { GameProvider } from "./GamesProvider";
import { useFetchGames } from "../../services/useFetchGames";

type propsType = {
  children: ReactNode;
};

export const GameContext = (props: propsType) => {
  const games = useFetchGames();
  
  return (
    <GameProvider.Provider value={games}>
      {props.children}
    </GameProvider.Provider>
  );
};
