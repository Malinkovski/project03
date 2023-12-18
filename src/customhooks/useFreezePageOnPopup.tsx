import { useEffect } from "react";

    //? WORKS FOR ONLY NAVBAR
    //!TODO: fix this
    //!DOENST WORK FOR SEARCH AND FILTERS

const useFreezePageOnPopup = (state: boolean) => {
  useEffect(() => {
    if (!state) {
      document.body.style.overflow = "hidden";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [state]);
};

export default useFreezePageOnPopup;


/* import { useEffect } from "react";

const useFreezePageOnPopup = (state: boolean) => {
  const freezeWindow = () => {
    document.body.style.overflow = "hidden";
    document.body.style.top = `-${window.scrollY}px`;
  };
  const unfreezeWindow = () => {
    const scrollY = document.body.style.top;
    document.body.style.overflow = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  };

  useEffect(() => {
    const handleFreezeBg = () => {
      if (window.innerWidth < 768 && !state) {
        freezeWindow();
      } else {
        unfreezeWindow();
      }
    };

    handleFreezeBg();

    //!TODO: fix this
    //!PAGE SCROLLS UP WHEN RESIZED!

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleFreezeBg);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleFreezeBg);
      }
    };
  }, [state]);
};

export default useFreezePageOnPopup; */


//!!THIS IS THE PREVIOUS SEMI WORKING 

/* 

import { useEffect } from "react";

    //? WORKS FOR ONLY NAVBAR
    //!TODO: fix this
    //!DOENST WORK FOR SEARCH AND FILTERS

const useFreezePageOnPopup = (state: boolean) => {
  const freezeWindow = () => {
    document.body.classList.add("freeze-scroll");
  };

  const unfreezeWindow = () => {
    document.body.classList.remove("freeze-scroll");
  };

  useEffect(() => {
    const handleFreezeBackground = () => {
      if (window.innerWidth < 768 && !state) {
        freezeWindow();
      } else {
        unfreezeWindow();
      }
    };

    handleFreezeBackground();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleFreezeBackground);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleFreezeBackground);
      }
    };
  }, [state]);
};

export default useFreezePageOnPopup;


/* import { useEffect } from "react";

const useFreezePageOnPopup = (state: boolean) => {
  const freezeWindow = () => {
    document.body.style.overflow = "hidden";
    document.body.style.top = `-${window.scrollY}px`;
  };
  const unfreezeWindow = () => {
    const scrollY = document.body.style.top;
    document.body.style.overflow = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  };

  useEffect(() => {
    const handleFreezeBg = () => {
      if (window.innerWidth < 768 && !state) {
        freezeWindow();
      } else {
        unfreezeWindow();
      }
    };

    handleFreezeBg();

    //!TODO: fix this
    //!PAGE SCROLLS UP WHEN RESIZED!

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleFreezeBg);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleFreezeBg);
      }
    };
  }, [state]);
};

export default useFreezePageOnPopup; */



