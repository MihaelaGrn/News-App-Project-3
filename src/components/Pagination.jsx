import React from "react";
import BootstrapPagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";

function Pagination(props) {
  const { active, baseUrl } = props;
  const navigator = useNavigate();
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <BootstrapPagination.Item
        key={number}
        active={number === Number(active)}
        onClick={() => {
          navigator(`${baseUrl}?page=${number}`);
        }}
      >
        {number}
      </BootstrapPagination.Item>
    );
  }
  return (
    <div className="d-flex justify-content-center align-items-center my-3">
      <BootstrapPagination>{items}</BootstrapPagination>
    </div>
  );
}

export default Pagination;
