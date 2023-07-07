import { useContext, useMemo, useState } from "react";
import { GameProvider } from "../context/games/GamesProvider";
import { GameCard } from "../components/card/GameCard";

export const Search = () => {
  const games = useContext(GameProvider);
  const [search, setSearch] = useState<string>("");

  const sortGames = useMemo(
    () => games?.sort(() => Math.random() - 0.5),
    [games]
  );

  return (
    <main>
      <div className="SearchBar">
        <input
          placeholder="Overwatch 2"
          autoFocus
          type="text"
          onChangeCapture={(e) => setSearch(e.currentTarget.value)}
          className="SearchBar-input"
          list="game-title"
          disabled={sortGames ? false : true}
        />
        <datalist id="game-title">
          {sortGames
            ?.filter((game) => game.title.match(search))
            .slice(0, 5)
            .map((game, index) => (
              <option key={index}>{game.title}</option>
            ))}
        </datalist>
      </div>
      <section className="container-games">
        {games
          ?.filter((game) => game.title.match(search))
          .slice(0, 12)
          .map((game, index) => (
            <GameCard game={game} key={index} index={index} />
          ))}
      </section>
    </main>
  );
};
