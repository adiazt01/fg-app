import { Link } from "react-router-dom";
import { gameDetail } from "../../types/gamesType";
import { ButtonCard } from "../buttons/ButtonCard";
import "/src/styles/GameCard.scss";

type props = {
  game: gameDetail;
  index: number;
};

export const GameCard = (props: props) => {
  const { game, index } = props;
  const { title, id, thumbnail } = game;

  return (
      <div className="GameCard">
        <img className="GameCard-img" loading="lazy" src={`${thumbnail}`} alt="" />
        <p className="GameCard-title">{title}</p>
        <div className="GameCard__buttonContainer">
          <Link
            className="GameCard__buttonContainer-link"
            to={`/fg-app/games/${id}`}
          >
            Ver juego
          </Link>
          <ButtonCard
            className="GameCard__buttonContainer-buttonFav"
            index={index}
            id={id}
          ></ButtonCard>
        </div>
      </div>
  );
};
