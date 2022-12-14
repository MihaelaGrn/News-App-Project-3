import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../store/favorites/context";
import { removeFromFavorites } from "../store/favorites/actions";
import styles from "./NewsCard.module.css";

function NewsCard(props) {
  const { imgSrc, title, description, id, isFavorites = false } = props;
  const { favoritesDispatch } = useContext(FavoritesContext);
  const removeNewsHandler = (newsId) => {
    const actionResult = removeFromFavorites(newsId);
    favoritesDispatch(actionResult);
  };

  return (
    <Card
      className={`${styles.newsCard} h-100 d-flex flex-column justify-content-between align-items-center`}
    >
      <Link to={`/news/${encodeURIComponent(id)}`}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Link>
      {isFavorites && (
        <Button
          variant="danger"
          onClick={() => {
            removeNewsHandler(id);
          }}
        >
          Remove from Favorites
        </Button>
      )}
    </Card>
  );
}

export default NewsCard;
