import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";

function NewsDetails() {
  const { newsId } = useParams();
  const decodeUrl = decodeURIComponent(newsId);
  console.log(decodeUrl);
  return (
    <Layout>
      <Container>News Details</Container>
    </Layout>
  );
}

export default NewsDetails;
