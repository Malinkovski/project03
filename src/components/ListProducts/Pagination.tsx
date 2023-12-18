import React from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import ArrowForwardSvg from "/public/images/icons/carousel/arrow-forward.svg";
import ArrowBackSvg from "/public/images/icons/carousel/arrow-back.svg";

//export const PreviousArrow = () => <ArrowBackSvg className="svg-arrow"/>;
//export const NextArrow = () => <ArrowForwardSvg className="svg-arrow"/>;

interface PaginationProps {
  pageCount: number;
  onPageChange: (data: { selected: number } & ReactPaginateProps) => void;
  GoToPage?: number;
}

const Pagination = ({ pageCount, onPageChange, GoToPage }: PaginationProps) => (
  <div className="page-nav-container">
    <ReactPaginate
      previousLabel={<ArrowBackSvg className="svg-arrow" />}
      previousClassName="previous"
      nextLabel={<ArrowForwardSvg className="svg-arrow" />}
      nextClassName="next"
      breakLabel="..."
      pageCount={pageCount}
      forcePage={GoToPage || 0}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      onPageChange={onPageChange}
      containerClassName="page-nav"
      pageClassName="pages"
      pageLinkClassName="link-tag"
      activeClassName="selected"
      activeLinkClassName="selected"
      breakClassName="ellipsis"
    />
  </div>
);

export default Pagination;
