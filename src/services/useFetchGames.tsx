import axios from "axios";
import { useState, useEffect } from "react";
import { gamesType } from "../types/gamesType";

export const useFetchGames = (): gamesType => {
  const [games, setGames] = useState<gamesType>([]);

  useEffect(() => {
    const options = {
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "X-RapidAPI-Key": "b53d49cf53msha26322b279f75dfp127b3bjsn5d5ba20934db",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
      SameSite: "SameSite=Strict"
    };
    axios.request(options).then((response) => setGames(response.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return games;
};
