import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { gameDetail } from "../types/gamesType";
import axios from "axios";
import "/src/styles/GameInfo.scss";

export const GameInfo = () => {
  const [game, setGame] = useState<gameDetail>();
  const { id } = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
      params: { id: id },
      headers: {
        "X-RapidAPI-Key": "b53d49cf53msha26322b279f75dfp127b3bjsn5d5ba20934db",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      axios.request(options).then((response) => setGame(response.data));
    } catch (error) {
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {game ? (
        <section className="GameInfo">
          <div className="GameInfo__cover">
            <img
              className="GameInfo__cover-img"
              src={`${game?.thumbnail}`}
              alt=""
            />
            <a
              className="GameInfo__cover-viewButton"
              href={`${game?.game_url}`}
              target="_blank"
              hrefLang="noreferrer"
            >
              View game
            </a>
          </div>
          <div className="GameInfo__info">
            <h3 className="GameInfo__info-title">{game?.title}</h3>
            <article className="GameInfo__info-description">
              {game?.description}
            </article>
            <div className="GameInfo__info__details">
              <h3 className="GameInfo__info-title">Details</h3>
              <p className="GameInfo__info__details-detail">
                {game?.developer}
              </p>
              <p className="GameInfo__info__details-detail">
                {game?.release_date}
              </p>
              <p className="GameInfo__info__details-detail">{game?.platform}</p>
            </div>
          </div>
        </section>
      ): <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
    </Fragment>
  );
};
