import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function NewsCard(props) {
  const { imgSrc, title, description, id } = props;
  return (
    <Link to={`/news/${encodeURIComponent(id)}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default NewsCard;
