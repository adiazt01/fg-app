import { useRef, useEffect, useState, useContext } from "react";
import { GameProvider } from "../context/games/GamesProvider";
import { gamesType } from "../types/gamesType";

export const useInterserctionObserver = () => {
  const games = useContext<gamesType>(GameProvider);
  const [load, setLoad] = useState(0);
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "300px",
      threshold: 1.0,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && games.length > 1) {
          setLoad(load + 1);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    if (element.current) {
      observer.observe(element.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [games, load]);

  return { element, load };
};
