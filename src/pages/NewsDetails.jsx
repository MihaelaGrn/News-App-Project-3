import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import { getNewsDetailsEndpoint } from "../api/endpoints";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsDetails } from "../api/adaptors";
import style from "../pages/NewsDetails.module.css";

function NewsDetails() {
  const { newsId } = useParams();
  const decodedUrl = decodeURIComponent(newsId);
  const url = getNewsDetailsEndpoint(decodedUrl);
  const newsData = useFetch(url);
  const adaptedNewsData = getNewsDetails(newsData);
  console.log(adaptedNewsData);
  console.log(newsData);

  return (
    <Layout>
      <Container className={`${style.newsDetails} my-5`}>
        <Row className="d-flex justify-content-center">
          <Col xs={12} lq={8}>
            <h1 className="mb-5 pt-3">{adaptedNewsData.title}</h1>
            <p>{adaptedNewsData.description}</p>
            <div dangerouslySetInnerHTML={{ __html: adaptedNewsData.image }} />
            <div
              dangerouslySetInnerHTML={{ __html: adaptedNewsData.content }}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default NewsDetails;
