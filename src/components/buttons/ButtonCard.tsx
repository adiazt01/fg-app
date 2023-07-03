import { useContext, useEffect, useState } from "react";
import { GameProvider } from "../../context/games/GamesProvider";
import { database } from "../../database/favoriteData";
import { gamesType } from "../../types/gamesType";

type Props = {
  index: number;
  id: number;
};

export const ButtonCard = ({ index, id }: Props) => {
  const [favorite, setFavorite] = useState(false);
  const games = useContext(GameProvider);

  useEffect(() => {
    const favoriteData: string | null = JSON.stringify(
      localStorage.getItem("data")
    );

    const favoriteJson: gamesType = JSON.parse(
      favoriteData ? JSON.parse(favoriteData) : null
    );

    if (favoriteJson) {
      favoriteJson.map((game) => {
        if (game.id === id) {
          setFavorite(true);
        }
      });
    }
  }, [favorite, id]);

  const addDatabase = (index: number) => {
    database.push(games[index]);
    const favoriteJson = JSON.stringify(database);
    localStorage.setItem("data", favoriteJson);
    setFavorite(!favorite);
  };

  const deleteDatabase = () => {
    const favoriteData: string | null = JSON.stringify(
      localStorage.getItem("data")
    );

    const favoriteJson: gamesType = JSON.parse(
      favoriteData ? JSON.parse(favoriteData) : null
    );

    if (favoriteJson) {
      favoriteJson.map((game) => {
        if (game.id === id) {
          localStorage.setItem(
            "data",
            JSON.stringify(favoriteJson.filter((game) => game.id !== id))
          );
          setFavorite(!favorite);
        }
      });
    }
  };

  return (
    <button
      onClick={favorite ? () => deleteDatabase() : () => addDatabase(index)}
    >
      {favorite ? "💖" : "🤍"}
    </button>
  );
};
