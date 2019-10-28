import React from "react";

const ITEM_PER_PAGE = 30;
function Pagination({ paginationClickHandler, page, total_count }) {
  //create an array of page numbers
  //array length is equal to total number of items divided by item shown per page
  const pages = Array.from(
    Array(Math.floor(total_count / ITEM_PER_PAGE)).keys()
  );

  function onPageLinkClick(pageNumber) {
    page = pageNumber;
    paginationClickHandler(page);
  }

  return (
    <nav aria-label="Page navigation" className="mt-5">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => paginationClickHandler(--page)}
          >
            Previous
          </button>
        </li>
        {pages.map(pageNumber => {
          return (
            <li
              className={`page-item ${page === pageNumber + 1 ? "active" : ""}`}
            >
              <button
                class="page-link"
                onClick={() => onPageLinkClick(pageNumber + 1)}
              >
                {pageNumber + 1}
              </button>
            </li>
          );
        })}
        <li className={`page-item ${page === pages.length ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageLinkClick(page + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;