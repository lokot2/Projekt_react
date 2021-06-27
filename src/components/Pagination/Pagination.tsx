import React from 'react';
import ReactPaginate from 'react-paginate';

import { PaginationWrapper } from "./Pagination.styles";

interface Props {
  pageRangeDisplayed: number;
  pageCount: number;
  marginPagesDisplayed: number;
  onPageChange?: (selectedItem: {selected: number}) => void;
}

const Pagination: React.FC<Props> = (props) => (
  <PaginationWrapper>
    <ReactPaginate {...props}  />
  </PaginationWrapper>
)

export default Pagination;
