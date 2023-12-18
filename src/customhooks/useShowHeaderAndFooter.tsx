import{ useEffect, useState } from "react";

const useShowHeaderAndFooter = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isDesktop,
    setIsDesktop,
  };
};

export default useShowHeaderAndFooter;
