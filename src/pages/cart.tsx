import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Breadcrumbs from "../components/Breadcrumbs/BreadCrumbs";
import ListLimitedProducts from "../components/ListProducts/ListLimitedProducts";
import Head from "next/head";
import ProductsMap from "../components/ListProducts/ProductsMap";
import { MinimalProductProps } from "../properties/products";
import OutOfStock from "../components/PageErrors/OutOfStock";
import ButtonCartFavorites from "../components/Buttons/Cart/ButtonCartFavorites";
import { useCartFavoritesContext } from "../context/CartFavoritesContext";
import Policy from "../components/Misc/Policy";
import CartItemPrices from "../components/Cart/CartItemPrices";
import GiftCardPrices from "../components/Cart/GiftCartPrices";
import DeliveryFeePrices from "../components/Cart/DeliveryFeePrices";
import SalePrices from "../components/Cart/SalePrices";
import TotalPrices from "../components/Cart/TotalPrices";
import useTags from "../customhooks/useTags";
import ButtonSubmitClearCart from "../components/Buttons/Cart/ButtonSubmitClearCart";
import PurchaseForm from "../components/Forms/PurchaseForm";
import { useNavigationContext } from "../context/NavigationContext";
import {
  DELIVERY_FEE,
  LIMIT_ITEMS_PER_SMALL_PAGINATION,
  PRODUCTS_API,
} from "../properties/variables";

const CartPage: NextPage = () => {
  const [products, setProducts] = useState<MinimalProductProps[]>([]);
  const [favoritesFromStorage, setFavoritesFromStorage] = useState<number>(0);
  const { uniqueTags, updateTags } = useTags();
  const { showPurchaseModal, setShowPurchaseModal } = useNavigationContext();
  const { cart, favorites, setCart, giftcards, setGiftcards } =
    useCartFavoritesContext();

  useEffect(() => {
    fetchProducts();
  }, [cart, favorites, giftcards]);

  const fetchProducts = async () => {
    try {
      const favoritesFromStorage = localStorage.getItem("favorites");
      if (favoritesFromStorage) {
        const favoriteIds = JSON.parse(favoritesFromStorage);
        setFavoritesFromStorage(favoriteIds.length);
      }

      if (!cart || cart.length === 0) {
        return updateTags([]), setProducts([]);
      }

      const queryParams = cart
        .map((item) => `id=${item.productId}`)
        .join("&");
      const res = await fetch(`${PRODUCTS_API}?${queryParams}`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(`Error fetching cart data from ${PRODUCTS_API}`);
      }

      updateTags(data);
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    localStorage.removeItem("giftcards");
    setCart([]);
    setGiftcards([]);
  };

  return (
    <>
      <Head>
        <title>{`Игралиште - Кошничка`}</title>
        <meta name="cart page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="info cart-favorites">
        <div className="container">
          <Breadcrumbs />
          <div className="inner-container-90w">
            <ButtonCartFavorites
              cartAmount={products.length + giftcards.length}
              favoritesAmount={favoritesFromStorage}
            />
            <div className="cart">
              {products.length > 0 || giftcards.length > 0 ? (
                <ProductsMap products={products} />
              ) : (
                <OutOfStock text="Немате додадено продукти во кошничка" />
              )}
            </div>

            <div className="prices">
              <div>
                <ul>
                  {products.length > 0 && (
                    <CartItemPrices products={products} cart={cart} />
                  )}
                  {giftcards.length > 0 && (
                    <GiftCardPrices giftcards={giftcards} />
                  )}
                  {products.length > 0 && (
                    <>
                      <DeliveryFeePrices deliveryFee={DELIVERY_FEE} />
                      <SalePrices products={products} cart={cart} />
                    </>
                  )}
                </ul>
                {(products.length !== 0 || giftcards.length !== 0) && (
                  <>
                    <TotalPrices
                      products={products}
                      cart={cart}
                      giftcards={giftcards}
                      deliveryFee={DELIVERY_FEE}
                    />

                    <ButtonSubmitClearCart
                      setShowModalStatus={setShowPurchaseModal}
                      clearCart={handleClearCart}
                    />
                  </>
                )}
                <PurchaseForm
                  showModalStatus={showPurchaseModal}
                  setShowModalStatus={setShowPurchaseModal}
                  clearCart={handleClearCart}
                />
              </div>
            </div>
          </div>
          <Policy />
          <ListLimitedProducts
            title="Други парчиња"
            apiUrl={PRODUCTS_API}
            fromTags={uniqueTags}
            ItemsPerPage={LIMIT_ITEMS_PER_SMALL_PAGINATION}
          />
        </div>
      </section>
    </>
  );
};
export default CartPage;
