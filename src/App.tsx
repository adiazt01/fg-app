import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { GameInfo } from "./pages/GameInfo";
import { Favorites } from "./pages/Favorites";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route path="*" element={"No encontrado"} />
        <Route path="/games/:id" element={<GameInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
