import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { LIMIT_ITEMS_PER_SMALL_PAGINATION } from "../../properties/variables";
import ProductsMap from "./ProductsMap";
import { MinimalProductProps } from "../../properties/products";
import { SearchProductsProps } from "../../properties/pageprops";
import { shuffleItems } from "../../utilities/shuffle-items";
import { ReactPaginateProps } from "react-paginate";

const SearchProducts = ({
  title,
  query,
  apiUrl,
  fromTags,
  shuffle,
}: SearchProductsProps) => {
  const [products, setProducts] = useState<MinimalProductProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCounter, setPageCounter] = useState(0);

  useEffect(() => {
    if (apiUrl) {
      if (query && query !== "") {
        const params = new URLSearchParams();
        params.set("q", query);
        params.set("_page", currentPage.toString());
        params.set("_limit", LIMIT_ITEMS_PER_SMALL_PAGINATION.toString());
        fetchData(apiUrl, params);
      } else if (fromTags) {
        const params = new URLSearchParams();
        fromTags.map((tag) => {
          params.append("tags_like", tag);

        });
        params.set("_page", currentPage.toString());
        params.set("_limit", LIMIT_ITEMS_PER_SMALL_PAGINATION.toString());
        fetchData(apiUrl, params);
      } else {
        setProducts([]);
        setPageCounter(0);
      }
    }
  }, [query, currentPage, fromTags]);

  const fetchData = async (url: string, params: URLSearchParams) => {
    const generatedUrl = new URL(url);
    generatedUrl.search = params.toString();

    try {
      const res = await fetch(generatedUrl.toString());
      if (!res.ok) {
        throw new Error(`Error fetching data from ${url}`);
      }

      const data = await res.json();
      const totalProducts = res.headers.get("x-total-count");

      if (totalProducts) {
        setPageCounter(
          Math.ceil(+totalProducts / LIMIT_ITEMS_PER_SMALL_PAGINATION)
        );
      }
      if(shuffle){
        setProducts(shuffleItems(data)); //!EXPENSIVE ON CLIENT SIDE?
      }else{
        setProducts(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (data: { selected: number } & ReactPaginateProps) => {
    setCurrentPage(data.selected + 1);
  };

  return (
    <div>
      {title && products.length !== 0 && (
        <div>
          <h3>{title}:</h3>
        </div>
      )}
      {pageCounter ? (
        <>
          <ProductsMap products={products} />
          <Pagination pageCount={pageCounter} onPageChange={handlePageChange} />
        </>
      ) : null}
    </div>
  );
};

export default SearchProducts;
