import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getNewsCategoryEndpoint } from "../api/endpoints";
import { useFetch } from "../utils/hooks/useFetch";

function NewsCategory() {
  const { categoryId } = useParams();
  const url = getNewsCategoryEndpoint(categoryId, 1);
  const data = useFetch(url);
  console.log(data);
  return (
    <div>
      <Container>{categoryId}</Container>
    </div>
  );
}

export default NewsCategory;
