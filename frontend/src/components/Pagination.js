import { CPagination, CPaginationItem } from "@coreui/react";

const Pagination = ({ paginationData, getNames }) => {
  const { currentPage, hasNextPage, hasPreviousPage, nextPage, previousPage } =
    paginationData;

  return (
    <CPagination align="center" aria-label="Page navigation example">
      <span onClick={() => getNames(currentPage - 1)}>
        {hasPreviousPage && <CPaginationItem>Previous</CPaginationItem>}
      </span>
      <span onClick={() => getNames(currentPage - 1)}>
        {hasPreviousPage && <CPaginationItem>{previousPage}</CPaginationItem>}
      </span>
      <span>
        <CPaginationItem>{currentPage}</CPaginationItem>
      </span>
      <span onClick={() => getNames(currentPage + 1)}>
        {hasNextPage && <CPaginationItem>{nextPage}</CPaginationItem>}
      </span>
      <span onClick={() => getNames(currentPage + 1)}>
        {hasNextPage && <CPaginationItem>Next</CPaginationItem>}
      </span>
    </CPagination>
  );
};

export default Pagination;
