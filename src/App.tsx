import { useContext, useState } from "react";
import "./App.css";
import { GameProvider } from "./context/games/GamesProvider";
import { ButtonCard } from "./components/buttons/ButtonCard";

function App() {
  const [search, setSearch] = useState("");
  const games = useContext(GameProvider);

  /* games.map(e => e.id) */
  return (
    <main>
      <input
        type="text"
        onChange={(input) => setSearch(input.currentTarget.value)}
      />
      {games
        ?.filter((game) => game.title.match(search))
        .map((game, index) => (
          <div key={index}>
            <p>{game.title}</p>
            <ButtonCard index={index} id={game.id}></ButtonCard>
          </div>
        ))}
      {}
    </main>
  );
}

export default App;
