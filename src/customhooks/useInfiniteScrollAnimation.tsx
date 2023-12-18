import { useEffect } from "react";
import { addInfiniteScrollAnimation } from "../utilities/ribbon-animation";

const useInfiniteScrollAnimation = (
  startRender: boolean,
  container: string,
  child: string
) => {
  useEffect(() => {
    //const width = window.screen.width;

    if (startRender) {
      addInfiniteScrollAnimation(container, child, /* width */);
    }
  }, [startRender]);
};

export default useInfiniteScrollAnimation;
