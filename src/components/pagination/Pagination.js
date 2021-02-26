import React from "react";
import "./pagination.css";

const Pagination = ({ dataPerPage, totalData, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="footer">
      <nav className="pagination-menu">
        {pageNumbers.map((number) => (
          <ul>
            <li key={number}>
              <spam
                style={{ cursor: `pointer` }}
                className="menu-pagination-option"
                onClick={() => paginate(number)}
              >
                {number}
              </spam>
            </li>
          </ul>
        ))}
      </nav>
    </div>
  );
};

export default Pagination;
