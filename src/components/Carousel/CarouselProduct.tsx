import React, { useState } from "react";
import Slider from "react-slick";
import SlideLeft from "./SlideLeft";
import SlideRight from "./SlideRight";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProductProps {
  images: string[];
}

const CarouselProduct = ({ images }: CarouselProductProps) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const settings = {
    infinite: false,
    speed: 450,
    arrows: true,
    prevArrow: <SlideLeft/>,
    nextArrow: <SlideRight/>,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    centerPadding: "0",
    centerMode: false,
    // afterChange: (index: number) => setActiveSlideIndex(index)
  };

  const handleImageClick = (index: number) => {
    setActiveSlideIndex(index);
  };

  return (
    <div className="images-content">
      {/* larger image display */}
      <img
        className="head-image"
        src={images[activeSlideIndex]}
        alt={`img preview_${activeSlideIndex}`}
      />

      <div className="carousel-images">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div className="carousel-image" key={index}>
              <img
                src={img}
                className=""
                onClick={() => handleImageClick(index)}
                alt={`preview_${index}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselProduct;
