import { GameCard } from "../components/card/GameCard";
import { gamesType } from "../types/gamesType";

export const Favorites = () => {
  const favoriteLocalStorage = JSON.stringify(localStorage.getItem("data"));
  const favoriteJson: gamesType = JSON.parse(
    favoriteLocalStorage ? JSON.parse(favoriteLocalStorage) : []
  );

  return (
    <section className="container-games">
      {favoriteJson.map((game, index) => (
        <GameCard key={index} index={index} game={game}></GameCard>
      ))}
    </section>
  );
};
