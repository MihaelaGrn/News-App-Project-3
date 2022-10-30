import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Container } from "react-bootstrap";
import { FavoritesContext } from "../store/favorites/context";
import NewsCardList from "../components/NewsCardList";

function Favorites() {
  const { favoritesState } = useContext(FavoritesContext);
  const favorites = favoritesState.favorites;
  return (
    <Layout>
      <Container className="my-5">
        <h1 className="mb-5 pt-3">Favorite News</h1>
        {favoritesState.favorites.length < 1 ? (
          <p>No favorite news saved!</p>
        ) : (
          <NewsCardList newsList={favorites} isFavorites={true} />
        )}
      </Container>
    </Layout>
  );
}

export default Favorites;
