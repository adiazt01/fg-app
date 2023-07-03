import axios from "axios";
import { useState, useEffect } from "react";
import { gamesType } from "../types/gamesType";

const initialState:gamesType = [{
  title: "",
  id: 0,
}];

export const useFetchGames = ():gamesType => {
  const [games, setGames] = useState<gamesType>(initialState);

  useEffect(() => {
    const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b53d49cf53msha26322b279f75dfp127b3bjsn5d5ba20934db",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    axios.get(url, options).then((response) => {
      setGames(response.data);
    });
    console.log(games);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return games;
};
