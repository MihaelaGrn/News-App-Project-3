import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import { getNewsDetailsEndpoint } from "../api/endpoints";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsDetails } from "../api/adaptors";
import styles from "../pages/NewsDetails.module.css";
import Button from "react-bootstrap/Button";
import { getFormattedDate } from "../utils/date";
import { addToFavorites } from "../store/favorites/actions";
import { FavoritesContext } from "../store/favorites/context";
import AlertNotification from "../components/AlertNotification";

function NewsDetails() {
  const { favoritesDispatch } = useContext(FavoritesContext);
  const { newsId } = useParams();
  const decodedUrl = decodeURIComponent(newsId);
  const url = getNewsDetailsEndpoint(decodedUrl);
  const newsData = useFetch(url);
  const adaptedNewsData = getNewsDetails(newsData);
  const { title, image, description, content, date, author, thumbnail } =
    adaptedNewsData;
  const formattedDate = getFormattedDate(date);
  const [alert, setAlertNotification] = useState(false);

  const handleAddToFavorites = (product) => {
    const actionResult = addToFavorites(product);
    favoritesDispatch(actionResult);
  };

  function handleAlertNotification() {
    setAlertNotification(true);
    setTimeout(() => {
      setAlertNotification(false);
    }, 2000);
  }

  return (
    <Layout>
      {alert && <AlertNotification />}
      <Container className={`${styles.newsDetails} my-5`}>
        <Row className="d-flex justify-content-center">
          <Col xs={12} lq={8}>
            <h1 className="mb-5 pt-3">{title}</h1>
            <p>{description}</p>
            <div dangerouslySetInnerHTML={{ __html: image }} />
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="fw-bold">
                <p>{author}</p>
                <p className="mb-0">{formattedDate}</p>
              </div>
              <Button
                className={`${styles.btnStyle}`}
                onClick={() => {
                  handleAddToFavorites({
                    id: newsId,
                    imgSrc: thumbnail,
                    title,
                    description,
                  });
                  handleAlertNotification();
                }}
              >
                Add to Favorites
              </Button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default NewsDetails;
