import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

function NewsDetails() {
  const { newsId } = useParams();
  console.log(newsId);
  return (
    <div>
      <Container>News Details</Container>
    </div>
  );
}

export default NewsDetails;
