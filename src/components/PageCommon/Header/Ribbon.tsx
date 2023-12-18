import React, { useState, useEffect } from "react";
import useInfiniteScrollAnimation from "../../../customhooks/useInfiniteScrollAnimation";
import { ADS_API } from "../../../properties/variables";
import EightStarSvg from "/public/images/icons/emojione-monotone_eight-pointed-star.svg";

const Ribbon = () => {
  const [adOne, setAdOne] = useState("");
  const [adTwo, setAdTwo] = useState("");
  const [isFetchingFinished, setIsFetchingFinished] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(ADS_API);
        const data = await res.json();
        const { advertisement_1, advertisement_2 } = data;

        setAdOne(advertisement_1);
        setAdTwo(advertisement_2);
        setIsFetchingFinished(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useInfiniteScrollAnimation(
    isFetchingFinished,
    "animated-ribbon",
    "animated-ribbon-inner"
  );

  const showRibbon = adOne !== "" && adTwo !== "";

  return showRibbon ? (
    <div>
      <div className="ribbon animated-ribbon" data-speed="fast">
        <ul className="ribbon-content tag-list animated-ribbon-inner">
          <li>
            <h4>{adOne}</h4>
          </li>
          <li>
            <EightStarSvg className="svg-banner-star"/>
          </li>
          <li>
            <h4 className="olive-text">{adTwo}</h4>
          </li>
          <li>
            <EightStarSvg className="svg-banner-star"/>
          </li>
        </ul>
      </div>
    </div>
  ) : null;
};

export default Ribbon;
