import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Breadcrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import ProductsMap from "../../components/ListProducts/ProductsMap";
import Pagination from "../../components/ListProducts/Pagination";
import { GetServerSidePropsContext, NextPage } from "next";
import { ProductsPageProps } from "../../properties/pageprops";
import { FilterProps } from "../../properties/filters";
import useProductFilters from "../../customhooks/useFilters";
import FilterBar from "../../components/ProductFilters/FilterBar";
import SearchInput from "../../components/ProductFilters/SearchInput";
import FilterOptions from "../../components/ProductFilters/FilterOptions";
import FilterColors from "../../components/ProductFilters/FilterColors";
import FilterPrice from "../../components/ProductFilters/FilterPrice";
import ButtonFilters from "../../components/Buttons/ButtonFilters";
import {
  FILTERS_API,
  LIMIT_ITEMS_PER_BIG_PAGINATION,
  PRODUCTS_API,
} from "../../properties/variables";

const ProductsPage: NextPage<ProductsPageProps & FilterProps> = ({
  priceFilters,
  colorFilters,
  sizeFilters,
  vintageFilters,
  accessoryFilters,
  brandFilters,
  products,
  pageCount,
  currentPage: page,
}) => {
  const router = useRouter();

  const {
    currentPage,
    selectedCategories,
    selectedColors,
    selectedSizes,
    selectedBrands,
    selectedAccessories,
    selectedPrices,
    isSale,
    searchQuery,
    selectedSortOption,
    isFilterNavActive,
    setCurrentPage,
    closeFilteringBar,
    openFilteringBar,
    handlePageChange,
    handleCategoryChange,
    handleBrandChange,
    handleAccessoryChange,
    handleSizeChange,
    handleColorChange,
    handlePriceChange,
    handleSaleChange,
    handleSearchInputChange,
    handleSortOptionChange,
    handleCancelFilteringButton,
    handleClearFilteringButton,
  } = useProductFilters();

  useEffect(() => {
    setCurrentPage(page || 1);
    closeFilteringBar();
  }, [page]);

  const handleFilterButton = () => {
    const selectedPrice = priceFilters.find(
      (filter) => filter.value === selectedPrices
    );

    let priceFilterMin = "";
    let priceFilterMax = "";

    if (selectedPrice) {
      const [minValue, maxValue] = selectedPrice.value.split("-");
      priceFilterMin = minValue;
      priceFilterMax = maxValue;
    }

    const query = {
      ...(selectedCategories && { category_id_like: selectedCategories }),
      ...(selectedBrands && { tags_like: selectedBrands }),
      ...(selectedAccessories && { type_id_like: selectedAccessories }),
      ...(selectedSizes && { size_like: selectedSizes }),
      ...(selectedColors && { color_like: selectedColors }),
      ...(priceFilterMin && {
        price_gte: priceFilterMin ? priceFilterMin.toString() : [],
      }),
      ...(priceFilterMax && {
        price_lte: priceFilterMax ? priceFilterMax.toString() : [],
      }),
      ...(isSale && { sale: "true" }),
      ...(searchQuery && { q: searchQuery }),
      _page: "1",
    };

    router.push({
      pathname: "/products",
      query,
    });

    closeFilteringBar();
  };

  //!BUG: PAGE IS UNSCROLLABLE AFTER RESIZING WHILE FITLERING BAR IS OPEN
  //useFreezePageOnPopup(!isFilterNavActive);

  

  return (
    <>
      <Head>
        <title>{`Игралиште - Продукти и облека`}</title>
        <meta name="products page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="all-products">
        <div className="container">
          <Breadcrumbs />
          <FilterBar
            openFilteringBar={openFilteringBar}
            selectedSortOption={selectedSortOption}
            handleSortOptionChange={handleSortOptionChange}
          />
          <div className="main-content">
            <div
              className={`filter-containers ${
                isFilterNavActive ? "active" : ""
              }`}
            >
              <SearchInput
                searchQuery={searchQuery}
                handleFilter={handleSearchInputChange}
              />
              <FilterOptions
                title="Категорија"
                filters={vintageFilters}
                selected={selectedCategories}
                handleFilter={handleCategoryChange}
              />
              <FilterOptions
                title="Брендови"
                filters={brandFilters}
                selected={selectedBrands}
                handleFilter={handleBrandChange}
              />
              <FilterOptions
                title="Аксесоари"
                filters={accessoryFilters}
                selected={selectedCategories}
                handleFilter={handleAccessoryChange}
              />
              <FilterOptions
                title="Величина"
                filters={sizeFilters}
                selected={selectedSizes}
                handleFilter={handleSizeChange}
              />
              <FilterColors
                title="Боја"
                filters={colorFilters}
                selected={selectedColors}
                handleFilter={handleColorChange}
              />
              <FilterPrice
                title="Цена"
                isSale={isSale}
                handleSaleFilter={handleSaleChange}
                filters={priceFilters}
                selectedPrice={selectedPrices}
                handleFilter={handlePriceChange}
              />
              <ButtonFilters
                onClick={handleFilterButton}
                onCancel={handleCancelFilteringButton}
                onClear={handleClearFilteringButton}
              />
            </div>
            <ProductsMap products={products} />
          </div>
          {pageCount > 1 && currentPage <= pageCount && (
            <Pagination
              pageCount={pageCount}
              onPageChange={handlePageChange}
              GoToPage={currentPage - 1}
            />
          )}
        </div>
      </section>
    </>
  );
};

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  try {
    const {
      _page = 1,
      _limit = LIMIT_ITEMS_PER_BIG_PAGINATION.toString(),
      _sort = "",
      _order = "",
      ...restOfQuery
    } = query;

    const apiUrl = new URL(PRODUCTS_API);
    apiUrl.searchParams.set("_page", _page as string);
    apiUrl.searchParams.set("_limit", _limit as string);

    const appendFilterToQuery = (
      url: URL,
      key: string,
      filter: string | string[] | undefined
    ) => {
      if (filter) {
        if (Array.isArray(filter)) {
          filter.forEach((filter) => url.searchParams.append(key, filter));
        } else {
          url.searchParams.append(key, filter);
        }
      }
    };

    appendFilterToQuery(
      apiUrl,
      "category_id_like",
      restOfQuery.category_id_like
    );
    appendFilterToQuery(apiUrl, "tags_like", restOfQuery.tags_like);
    appendFilterToQuery(apiUrl, "type_id_like", restOfQuery.type_id_like);
    appendFilterToQuery(apiUrl, "size_like", restOfQuery.size_like);
    appendFilterToQuery(apiUrl, "color_like", restOfQuery.color_like);
    appendFilterToQuery(apiUrl, "price_gte", restOfQuery.price_gte);
    appendFilterToQuery(apiUrl, "price_lte", restOfQuery.price_lte);
    appendFilterToQuery(apiUrl, "sale", restOfQuery.sale);
    appendFilterToQuery(apiUrl, "q", restOfQuery.q);

    if (_sort !== "" && _order !== "") {
      apiUrl.searchParams.set("_sort", _sort as string);
      apiUrl.searchParams.set("_order", _order as string);
    }

    const resProducts = await fetch(apiUrl.toString());
    const resFilters = await fetch(FILTERS_API);

    const filtersData = await resFilters.json();

    const priceFilters = filtersData.prices;
    const colorFilters = filtersData.colors;
    const sizeFilters = filtersData.sizes;
    const vintageFilters = filtersData.vintage;
    const accessoryFilters = filtersData.accessories;
    const brandFilters = filtersData.brands;

    if (!resProducts.ok) {
      throw new Error("Failed fetching data in products page");
    }

    const products = await resProducts.json();

    const totalProducts = resProducts.headers.get("x-total-count");
    const totalProductsVal = totalProducts ? totalProducts : 0;
    const pageCount = Math.ceil(+totalProductsVal / +_limit);

    return {
      props: {
        priceFilters,
        colorFilters,
        sizeFilters,
        vintageFilters,
        accessoryFilters,
        brandFilters,
        products,
        pageCount,
        currentPage: +_page,
      },
    };
  } catch (error) {
    console.error("Error in fetching: " + error);

    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
};

export default ProductsPage;
