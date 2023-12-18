import { useNavigationContext } from "../../context/NavigationContext";
import { useEffect, useState } from "react";
import useFreezePageOnPopup from "../../customhooks/useFreezePageOnPopup";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
  const { closeNavbar,setCloseNavbar } = useNavigationContext();
  const [showSecondNavigation, setShowSecondNavigation] = useState(false);

  
  useFreezePageOnPopup(closeNavbar);
  useEffect(() => {
    const handleResize = () => {
      setShowSecondNavigation(window.innerWidth <= 1024);
      setCloseNavbar(true);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {showSecondNavigation ? (
        <MobileNavigation closeNavbar={closeNavbar}/>
      ) : (
        <DesktopNavigation closeNavbar={closeNavbar}/>
      )}
    </>
  );
};

export default Navigation;
