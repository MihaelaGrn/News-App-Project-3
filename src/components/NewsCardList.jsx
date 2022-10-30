import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsCard from "./NewsCard";

function NewsCardList(props) {
  const { newsList, isFavorites = false } = props;

  return (
    <Container>
      <Row>
        {newsList.map((news) => {
          return (
            <Col md={4} xs={12} lg={4} key={news.id} className="mb-4">
              <NewsCard
                id={news.id}
                imgSrc={news.imgSrc}
                title={news.title}
                description={news.description}
                isFavorites={isFavorites}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default NewsCardList;
