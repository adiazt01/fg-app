import { useState, useContext } from "react";
import { GameCard } from "../components/card/GameCard";
import { GameProvider } from "../context/games/GamesProvider";
import { useInterserctionObserver } from "../hooks/useIntersectionObserver";

export const Home = () => {
  const [search, setSearch] = useState("");
  const games = useContext(GameProvider);
  const { element, load } = useInterserctionObserver();

  return (
    <main>
      <header></header>
      <input
        type="text"
        onChange={(input) => setSearch(input.currentTarget.value)}
      />
      <section>
        {games
          ?.filter((game) => game.title.match(search))
          .slice(0, load)
          .map((game, index) => (
            <GameCard game={game} index={index} key={index} />
          ))}
        <div ref={element}>Hola</div>
      </section>
    </main>
  );
};
