import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getNewsCategoryEndpoint } from "../api/endpoints";
import { useFetch } from "../utils/hooks/useFetch";
import Layout from "../components/Layout";
import { getNewsList } from "../api/adaptors";
import NewsCardList from "../components/NewsCardList";
import Pagination from "../components/Pagination";

function NewsCategory() {
  const { categoryId } = useParams();
  const [queryParams] = useSearchParams();
  let currentPage = queryParams.get("page");
  if (!currentPage) {
    currentPage = 1;
  }
  const url = getNewsCategoryEndpoint(categoryId, currentPage);
  const data = useFetch(url);
  const newsList = getNewsList(data);
  console.log(data);
  let title = "";
  switch (categoryId) {
    case "technology":
      title = "Tech";
      break;
    case "football":
      title = "Football";
      break;
    case "environment":
      title = "Environment";
      break;
    default:
      break;
  }

  return (
    <Layout>
      <Container className="my-5">
        <h1 className="mb-5 pt-3">{title}</h1>
        <NewsCardList newsList={newsList} />
        <Pagination active={currentPage} baseUrl={`/category/${categoryId}`} />
      </Container>
    </Layout>
  );
}

export default NewsCategory;
