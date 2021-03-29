import React from "react";

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            < div className="page-link" onClick={() => paginate(number)}>
              {number}
            </ div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
