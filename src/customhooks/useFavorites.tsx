import {  useEffect, useState } from "react";
import  {
  useCartFavoritesContext,
} from "../context/CartFavoritesContext";

const useFavorites = (productId: string) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { favorites, setFavorites } = useCartFavoritesContext();

  useEffect(() => {
    if (favorites) {
      setIsFavorite(favorites.includes(productId));
    } else {
      setIsFavorite(false);
    }
  }, [productId]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleAddToFavorites = () => {
    const favoriteItems = localStorage.getItem("favorites");
    let favoriteIds = favoriteItems ? JSON.parse(favoriteItems) : [];

    if (isFavorite) {
      favoriteIds = favoriteIds.filter((id: string) => id !== productId);
    } else {
      favoriteIds.push(productId);
    }
    setFavorites(favoriteIds);
    toggleFavorite();
    localStorage.setItem("favorites", JSON.stringify(favoriteIds));
  };

  return { isFavorite, handleAddToFavorites };
};

export default useFavorites;
