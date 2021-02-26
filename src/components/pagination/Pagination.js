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
              <a className="menu-pagination-option" onClick={() => paginate(number)} href="!#">
                {number}
              </a>
            </li>
          </ul>
        ))}
      </nav>
    </div>
  );
};

export default Pagination;
