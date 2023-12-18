import { useNavigationContext } from "../../context/NavigationContext";
import { FormEvent, useEffect, useState } from "react";
import useFreezePageOnPopup from "../../customhooks/useFreezePageOnPopup";
import {
  LIMIT_ITEMS_PER_SMALL_PAGINATION,
  PRODUCTS_API,
} from "../../properties/variables";
import ListLimitedProducts from "../ListProducts/ListLimitedProducts";
import { useRouter } from "next/router";
import ArrowBackSvg from "/public/images/icons/carousel/arrow-back.svg";
import CloseXSvg from "/public/images/icons/close-x.svg";
import SearchSvg from "/public/images/icons/fluent_search-48-regular.svg";

const Search = () => {
  const { closeSearchbar, setCloseSearchbar } = useNavigationContext();
  const [, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => setCloseSearchbar(true));
  }, [router]);

  const handleFocus = () => setIsActive(true);

  const handleBackButton = () => {
    setCloseSearchbar(true);
  };

  const handleClearSearch = () => {
    setIsActive(false);
    setInputValue("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputValue("");
  };
  
  useFreezePageOnPopup(closeSearchbar);
  useEffect(() => {
    const handleResize = () => {
      (window.innerWidth <= 768);
      setCloseSearchbar(true);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="searchbar-container">
      <div className={` searchbar  ${closeSearchbar ? "closed" : ""}`}>
        <div className="searchbar-head">
          <div className="go-back" onClick={handleBackButton}>
            <ArrowBackSvg className="svg-small" />
          </div>
          <div className="search-field">
            <form className="form" onSubmit={handleSubmit}>
              <input
              id="searchbar"
                name=""
                type="text"
                className="button"
                placeholder="Пребарувај..."
                onFocus={handleFocus}
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
              />
              {inputValue !== "" ? (
                <CloseXSvg
                  className="svg-small close-icon"
                  onClick={handleClearSearch}
                />
              ) : (
                <SearchSvg className="svg-small search-icon" />
              )}
            </form>
          </div>
        </div>
        <ListLimitedProducts
          query={inputValue}
          apiUrl={PRODUCTS_API}
          ItemsPerPage={LIMIT_ITEMS_PER_SMALL_PAGINATION}
        />
      </div>
    </div>
  );
};

export default Search;
