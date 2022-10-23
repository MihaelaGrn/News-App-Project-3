import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getNewsCategoryEndpoint } from "../api/endpoints";
import { useFetch } from "../utils/hooks/useFetch";
import Layout from "../components/Layout";

function NewsCategory() {
  const { categoryId } = useParams();
  const url = getNewsCategoryEndpoint(categoryId, 1);
  const data = useFetch(url);
  console.log(data);
  return (
    <Layout>
      <Container>{categoryId}</Container>
    </Layout>
  );
}

export default NewsCategory;
