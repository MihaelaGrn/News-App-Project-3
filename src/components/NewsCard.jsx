import React from "react";
import { Card } from "react-bootstrap";

function NewsCard(props) {
  const { imgSrc, title, description } = props;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewsCard;
