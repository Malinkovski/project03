import React, { useEffect, useState } from "react";
import ProductsMap from "../components/ListProducts/ProductsMap";
import ListLimitedProducts from "../components/ListProducts/ListLimitedProducts";
import Breadcrumbs from "../components/Breadcrumbs/BreadCrumbs";
import Head from "next/head";
import OutOfStock from "../components/PageErrors/OutOfStock";
import ButtonCartFavorites from "../components/Buttons/Cart/ButtonCartFavorites";
import { MinimalProductProps } from "../properties/products";
import { NextPage } from "next";
import { useCartFavoritesContext } from "../context/CartFavoritesContext";
import useTags from "../customhooks/useTags";
import {
  PRODUCTS_API,
  LIMIT_ITEMS_PER_SMALL_PAGINATION,
} from "../properties/variables";

const FavoritesPage: NextPage = () => {
  const [products, setProducts] = useState<MinimalProductProps[]>([]);
  const [cartFromStorage, setCartFromStorage] = useState<number>(0);
  const { uniqueTags, updateTags } = useTags();
  const { favorites, cart, giftcards } = useCartFavoritesContext();

  useEffect(() => {
    fetchProducts();
  }, [favorites, cart]);

  const fetchProducts = async () => {
    try {
      const cartFromStorage = localStorage.getItem("cart");
      if (cartFromStorage) {
        const cartIds = JSON.parse(cartFromStorage);
        setCartFromStorage(cartIds.length);
      }
/* 
      const favoritesFromStorage = localStorage.getItem("favorites");
      const favorites =
        favoritesFromStorage && JSON.parse(favoritesFromStorage); */

      if (!favorites || favorites.length === 0) {
        return updateTags([]), setProducts([]);
      }

      const queryParams = favorites.map((id: string) => `id=${id}`).join("&");
      const res = await fetch(`${PRODUCTS_API}?${queryParams}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(`Error fetching favorites data from ${PRODUCTS_API}`);
      }

      updateTags(data);
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Head>
        <title>{`Игралиште - Омилени Продукти`}</title>
        <meta name="favorite products page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="info cart-favorites">
        <div className="container">
          <Breadcrumbs />
          <div className="inner-container-90w">
            <ButtonCartFavorites
              cartAmount={cartFromStorage + giftcards.length}
              favoritesAmount={products.length}
            />
            <div className="favorites">
              {products.length > 0 ? (
                <ProductsMap products={products} />
              ) : (
                <OutOfStock text="Немате додадено омилени продукти" />
              )}
            </div>
          </div>

          <ListLimitedProducts
            title="Други парчиња"
            apiUrl={PRODUCTS_API}
            fromTags={uniqueTags}
            ItemsPerPage={LIMIT_ITEMS_PER_SMALL_PAGINATION}
            shuffle={true}
          />
        </div>
      </section>
    </>
  );
};

export default FavoritesPage;
