import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { CartItem } from "../properties/products";


interface CartFavoritesContextProps {
  cart: CartItem[];
  favorites: string[];
  giftcards: number[];
  setCart: (value: CartItem[]) => void;
  setFavorites: (value: string[]) => void;
  setGiftcards: (value: number[]) => void;
}

const CartFavoritesContext = createContext<CartFavoritesContextProps>({
  cart: [],
  favorites: [],
  giftcards: [],
  setCart: () => {},
  setFavorites: () => {}, 
  setGiftcards: () => {},
});

interface ReactProps {
  children: ReactNode;
}

const CartFavoritesProvider = ({ children }: ReactProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [giftcards, setGiftcards] = useState<number[]>([]);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      const cartArray: CartItem[] = JSON.parse(cartData);
      setCart(Array.isArray(cartArray) ? cartArray : []);
    }

    const favoritesData = localStorage.getItem("favorites");
    if (favoritesData) {
      setFavorites(JSON.parse(favoritesData));
    }

    const giftcardsData = localStorage.getItem("giftcards");
    if (giftcardsData) {
      setGiftcards(JSON.parse(giftcardsData));
    }

  }, []); 



  return (
    <CartFavoritesContext.Provider
      value={{
        cart,
        favorites, 
        giftcards,
        setCart,
        setFavorites,
        setGiftcards,
      }}
    >
      {children}
    </CartFavoritesContext.Provider>
  );
};

export const useCartFavoritesContext = () => {
  const context = useContext(CartFavoritesContext);
  return context;
};

export default CartFavoritesProvider;
