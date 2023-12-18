import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import SlideLeft from "./SlideLeft";
import SlideRight from "./SlideRight";
import useSimpleFetchData from "../../customhooks/useSimpleFetchData";
import SimpleProductCard from "../Cards/SimpleProductCard";
import { PRODUCTS_API } from "../../properties/variables";
import { MinimalProductProps } from "../../properties/products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselHome = () => {
  const sliderRef = useRef<Slider | null>(null);
  const apiUrl = PRODUCTS_API;
  const customEntry = ["trending", "true"];
  
  const trendingProducts = useSimpleFetchData({ apiUrl, customEntry });
  const [infiniteScroll, setInfiniteScroll] = useState<boolean>(false);

  const handleNextSlide = () => sliderRef.current?.slickNext();
  const handlePrevSlide = () => sliderRef.current?.slickPrev();

  useEffect(() => {
    trendingProducts.length > 4
      ? setInfiniteScroll(true)
      : setInfiniteScroll(false);
  }, [trendingProducts.length]);

  const settings = {
    infinite: infiniteScroll,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="trending-carousel-container">
      <h4>Trendy парчиња во моментов</h4>
      <div className="carousel">
        <div className="carousel-cards">
          <Slider {...settings} ref={sliderRef}>
            {trendingProducts.map((product: MinimalProductProps) => (
              <SimpleProductCard key={product.id} product={product} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="carousel-nav">
        <SlideLeft onClick={handlePrevSlide} />
        <SlideRight onClick={handleNextSlide} />
      </div>
    </div>
  );
};

export default CarouselHome;
