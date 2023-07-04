import { Link } from "react-router-dom";
import { gameDetail } from "../../types/gamesType";
import { ButtonCard } from "../buttons/ButtonCard";

type props = {
  game: gameDetail;
  index: number;
};

export const GameCard = (props: props) => {
  const { game, index } = props;
  const { title, id } = game;

  return (
    <div>
      <p>{title}</p>
      <ButtonCard index={index} id={id}></ButtonCard>
      <Link to={`/games/${index}`}>Ver juego</Link>
    </div>
  );
};
