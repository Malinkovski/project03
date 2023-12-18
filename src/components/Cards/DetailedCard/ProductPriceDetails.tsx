import React, { useEffect } from "react";
import ButtonQuantity from "../../Buttons/Cart/ButtonQuantity";
import { DetailedProductProps } from "../../../properties/products";
import { calcPriceDiscount } from "../../../utilities/calc-sale";
import DetailedCardButtons from "./DetailedCardButtons";
import WarningModal from "../../Modals/WarningModal";
import { useRouter } from "next/router";

interface ProductPriceDetailsProps {
  product: DetailedProductProps;
  productQuantity: number;
  setProductQuantity(value: number): void;
  isFavorite: boolean;
  isInCart: boolean;
  setIsInCart(value: boolean): void;
  handleAddToCart(): void;
  handleAddToFavorites(): void;
}

const ProductPriceDetails = ({
  product,
  productQuantity,
  setProductQuantity,
  isFavorite,
  isInCart,
  handleAddToCart,
  handleAddToFavorites,
}: ProductPriceDetailsProps) => {
  
  const router = useRouter();

  useEffect(() => {
        setProductQuantity(1);
  },[router.query.id]);

  const handleDecrease = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const handleIncrease = () => {
    if (productQuantity < product.quantity) {
      setProductQuantity(productQuantity + 1);
    }
  };

  return (
    <div className={`product-price-details`}>
      {product.sale ? (
        <>
          <span className="price">
            <span className="scratched">{product.price}</span> ден.
          </span>
          <span className="price">
            <span className="sale">
              {calcPriceDiscount(product.price, product.discount)} ден.
            </span>
          </span>
        </>
      ) : (
        <span className="price">{product.price} ден.</span>
      )}
      <p className="description">{product.description}</p>

      <div className="order-amount">
        <h3>Количина:</h3>
        <ButtonQuantity
          onClick={handleDecrease}
          disabled={productQuantity <= 1}
          icon="fa-minus"
        />
        <h4 className="product-quantity-ordered">{productQuantity}</h4>
        <ButtonQuantity
          onClick={handleIncrease}
          disabled={productQuantity >= product.quantity}
          icon="fa-plus"
        />
      </div>
      <DetailedCardButtons
        handleAddToCart={handleAddToCart}
        handleAddToFavorites={handleAddToFavorites}
        isFavorite={isFavorite}
        isInCart={isInCart}
      />
      {isInCart &&
        <WarningModal
          message="Продуктот е веќе додаден во кошничка"
          linkName="Kошничка"
          link="/cart"
        />
      }
    </div>
  );
};

export default ProductPriceDetails;


