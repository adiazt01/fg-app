import { useContext, useEffect, useState } from "react";
import {
  addDatabase,
  deleteDatabase,
  searchIdDatabse,
} from "../../database/favoriteData";
import { GameProvider } from "../../context/games/GamesProvider";
import { gamesType } from "../../types/gamesType";

type Props = {
  index: number;
  id: number;
};

export const ButtonCard = ({ index, id }: Props) => {
  const [favorite, setFavorite] = useState(false);
  const games = useContext(GameProvider);

  useEffect(() => {
    const getFavoriteFromLocalStorage = () => {
      const favoriteLocalStorage = localStorage.getItem("data");
      if (favoriteLocalStorage) {
        const favoriteJson: gamesType = JSON.parse(favoriteLocalStorage);
        const isFavorite = favoriteJson.some((game) => game.id === id);
        setFavorite(isFavorite);
      }
    };

    getFavoriteFromLocalStorage();
  }, [id]);

  const addFavorite = () => {
    console.log(games[index]);
    addDatabase(games[index]);
    setFavorite(!favorite);
  };

  const deleteFavorite = () => {
    deleteDatabase(id);
    setFavorite(!favorite);
  };

  return (
    <button onClick={favorite ? () => deleteFavorite() : () => addFavorite()}>
      {favorite ? "💖" : "🤍"}
    </button>
  );
};
