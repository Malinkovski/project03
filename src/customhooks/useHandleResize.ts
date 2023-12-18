import { useEffect } from "react";

export const handleResize = (event: Event) => {
  event.preventDefault();

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};