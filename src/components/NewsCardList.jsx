import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsCard from "./NewsCard";

function NewsCardList(props) {
  const { newsList } = props;
  return (
    <Container>
      <Row>
        {newsList.map((news) => {
          return (
            <Col md={4} xs={12} lg={4}>
              <NewsCard
                imgSrc={news.imgSrc}
                title={news.title}
                description={news.description}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default NewsCardList;
