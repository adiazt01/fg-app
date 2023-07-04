import { useRef, useEffect, useState } from "react";

export const useInterserctionObserver = () => {
  const [load, setLoad] = useState(0);
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "150px",
      threshold: 1.0,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
  }, [load]);

  return { element, load };
};
