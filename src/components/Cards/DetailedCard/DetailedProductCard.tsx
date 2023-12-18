import React from "react";
import { DetailedProductProps } from "../../../properties/products";
import CarouselProduct from "../../Carousel/CarouselProduct";
import ProductPriceDetails from "./ProductPriceDetails";
import ProductSize from "./ProductSize";
import ProductDescription from "./ProductDescription";
import ProductTags from "./ProductTags";
import FixedButtons from "../../Buttons/Cart/FixedButtons";
import useCart from "../../../customhooks/useCart";
import useFavorites from "../../../customhooks/useFavorites";

interface ProductDetailProps {
  product: DetailedProductProps;
}

const DetailedProductCard = ({ product }: ProductDetailProps) => {
  const { isFavorite, handleAddToFavorites } = useFavorites(product.id);
  const {
    isInCart,
    setIsInCart,
    handleAddToCart,
    productQuantity,
    setProductQuantity,
  } = useCart(product.id);

  return (
    <div className="detailed-product inner-container-90w">
      <h3>{product.name}</h3>
      <div className="detailed-product-content">
          <CarouselProduct images={product.images} />
        <div className="text-content flex-c ">
          <ProductPriceDetails
            product={product}
            productQuantity={productQuantity || 1} //!prob an error FIX
            isFavorite={isFavorite}
            isInCart={isInCart || false} //!prob an error FIX
            setIsInCart={setIsInCart}
            setProductQuantity={setProductQuantity}
            handleAddToCart={handleAddToCart}
            handleAddToFavorites={handleAddToFavorites}
          />
          <ProductSize product={product} />
          <ProductDescription product={product} />
          <ProductTags product={product} />
        </div>
        <FixedButtons
          handleAddToCart={handleAddToCart}
          handleAddToFavorites={handleAddToFavorites}
          isFavorite={isFavorite}
        />
      </div>
    </div>
  );
};

export default DetailedProductCard;
