import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import { getNewsDetailsEndpoint } from "../api/endpoints";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsDetails } from "../api/adaptors";
import style from "../pages/NewsDetails.module.css";
import Button from "react-bootstrap/Button";
import { getFormattedDate } from "../utils/date";
import { addToFavorites, AddToFavorites } from "../store/favorites/actions";
import { FavoritesContext } from "../store/favorites/context";

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

  const handleAddToFavorites = (product) => {
    const actionResult = addToFavorites(product);
    favoritesDispatch(actionResult);
  };

  return (
    <Layout>
      <Container className={`${style.newsDetails} my-5`}>
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
                className={`${style.btnStyle}`}
                onClick={() => {
                  handleAddToFavorites({
                    id: newsId,
                    imgSrc: thumbnail,
                    title,
                    description,
                  });
                }}
              >
                Adauga la favorite
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
