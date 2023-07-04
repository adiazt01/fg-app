import { useParams } from "react-router-dom";
import { GameProvider } from "../context/games/GamesProvider";
import { useContext } from "react";

export const GameInfo = () => {
  const { id } = useParams<string>();
  const game = useContext(GameProvider);

  const { title } = game[Number(id)];

  return <div>{title}</div>;
};
