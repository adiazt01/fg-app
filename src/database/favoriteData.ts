import { gamesType } from "../types/gamesType";

type gamesDetail = {
  title: string;
  id: number;
};

const dataInitial: [] = [];
if (localStorage.getItem("data") == null) {
  localStorage.setItem("data", JSON.stringify(dataInitial));
}

export const addDatabase = (data: gamesDetail) => {
  const favoriteLocalStorage = JSON.stringify(localStorage.getItem("data"));
  const favoriteJson = JSON.parse(
    favoriteLocalStorage ? JSON.parse(favoriteLocalStorage) : []
  );
  favoriteJson.push(data);
  localStorage.setItem("data", JSON.stringify(favoriteJson));
};

export const deleteDatabase = (id: number) => {
  if (localStorage.getItem("data") !== null) {
    const favoriteLocalStorage = JSON.stringify(localStorage.getItem("data"));
    const favoriteJson: gamesType = JSON.parse(
      favoriteLocalStorage ? JSON.parse(favoriteLocalStorage) : []
    );
    const favoriteJsonPop = favoriteJson.filter((game) => game.id !== id);
    localStorage.setItem("data", JSON.stringify(favoriteJsonPop));
  }
};

export const searchIdDatabse = (id: number) => {
  const favoriteLocalStorage = JSON.stringify(localStorage.getItem("data"));
  const favoriteJson: gamesType = JSON.parse(
    favoriteLocalStorage ? JSON.parse(favoriteLocalStorage) : []
  );

  favoriteJson.map((game) => (game.id === id ? true : false));
};
