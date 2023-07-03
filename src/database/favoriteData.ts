const favoriteLocalStorage = JSON.stringify(localStorage.getItem("data"));

console.log(favoriteLocalStorage)

const favoriteJson = JSON.parse(favoriteLocalStorage ? JSON.parse(favoriteLocalStorage):[]);

console.log(favoriteJson)

export const database = favoriteJson != null ? favoriteJson:[];
