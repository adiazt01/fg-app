import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { GameInfo } from "./pages/GameInfo";
import { Favorites } from "./pages/Favorites";
import { Search } from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/fg-app/" element={<Home />} />
        <Route path="/fg-app/search" element={<Search />}></Route>
        <Route path="/fg-app/favorite" element={<Favorites />} />
        <Route path="/fg-app/games/:id" element={<GameInfo />} />
        <Route path="*" element={"No encontrado"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
