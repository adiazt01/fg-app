import { useContext, useMemo } from "react";
import { GameCard } from "../components/card/GameCard";
import { GameProvider } from "../context/games/GamesProvider";
import { useInterserctionObserver } from "../hooks/useIntersectionObserver";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const games = useContext(GameProvider);
  const navigate = useNavigate();
  const { element, load } = useInterserctionObserver();

  const handlerSearch = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault;
    navigate("/search");
  };

  const sortGames = useMemo(
    () => games?.sort(() => Math.random() - 0.5),
    [games]
  );

  return (
    <main>
      <div className="SearchBar">
        <input
          disabled={sortGames ? false : true}
          className="SearchBar-input"
          type="text"
          onClick={handlerSearch}
          placeholder="Overwatch 2"
        />
      </div>
      <section className="container-games">
        {sortGames?.slice(0, load).map((game, index) => (
          <GameCard game={game} key={index} index={index} />
        ))}
        <div ref={element} style={{ marginTop: "50vh" }}></div>
      </section>
    </main>
  );
};
