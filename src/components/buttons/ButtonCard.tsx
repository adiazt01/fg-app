import { useContext, useEffect, useState } from "react";
import { addDatabase, deleteDatabase } from "../../database/favoriteData";
import { GameProvider } from "../../context/games/GamesProvider";
import { gamesType } from "../../types/gamesType";
import {AiFillHeart, AiOutlineHeart } from "react-icons/ai";

type Props = {
  index: number;
  id: number;
  className: string;
};

export const ButtonCard = ({ index, id, className }: Props) => {
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
    addDatabase(games[index]);
    setFavorite(!favorite);
  };

  const deleteFavorite = () => {
    deleteDatabase(id);
    setFavorite(!favorite);
  };

  return (
    <button
      className={className}
      onClick={favorite ? () => deleteFavorite() : () => addFavorite()}
    >
      {favorite ? <AiFillHeart/> : <AiOutlineHeart/>}
    </button>
  );
};
