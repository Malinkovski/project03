import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ContextProps {
  closeNavbar: boolean;
  setCloseNavbar: (value: boolean) => void;
  closeSearchbar: boolean;
  setCloseSearchbar: (value: boolean) => void;
  isFilterNavActive: boolean;
  setIsFilterNavActive: (value: boolean) => void;
  showPurchaseModal: boolean;
  setShowPurchaseModal: (value: boolean) => void;
  isLoggedIn: boolean;
}

const NavigationContext = createContext<ContextProps>({
  closeNavbar: true,
  setCloseNavbar: () => {},
  closeSearchbar: true,
  setCloseSearchbar: () => {},
  isFilterNavActive: false,
  setIsFilterNavActive: () => {},
  showPurchaseModal: false,
   setShowPurchaseModal: () => {},
   isLoggedIn: false
});

interface ReactProps {
  children: ReactNode;
}

const NavigationContextProvider = ({ children }: ReactProps) => {
  const [closeNavbar, setCloseNavbar] = useState<boolean>(true);
  const [closeSearchbar, setCloseSearchbar] = useState<boolean>(true);
  const [isFilterNavActive, setIsFilterNavActive] = useState<boolean>(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    
  useEffect(() => {

    const userSession = sessionStorage.getItem("user");
    if (userSession) {
        setIsLoggedIn(true);
      } else {
          setIsLoggedIn(false);
      }
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        closeNavbar,
        setCloseNavbar,
        closeSearchbar,
        setCloseSearchbar,
        isFilterNavActive,
        setIsFilterNavActive,
        showPurchaseModal, 
        setShowPurchaseModal,
        isLoggedIn
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  return context;
};

export default NavigationContextProvider;
