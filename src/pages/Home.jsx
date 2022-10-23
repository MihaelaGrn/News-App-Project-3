import React from "react";
import { Container } from "react-bootstrap";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoryEndpoint } from "../api/endpoints";
import Layout from "../components/Layout";
import NewsCard from "../components/NewsCard";

function Home() {
  const footballUrl = getNewsCategoryEndpoint("football", 1, 6);
  const footballData = useFetch(footballUrl);
  console.log(footballData);

  const techUrl = getNewsCategoryEndpoint("technology", 2, 6);
  const techData = useFetch(techUrl);
  console.log(techData);

  return (
    <Layout>
      <Container>
        <h1>Home</h1>
        <NewsCard
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiHFAAeHEYde_aXLL9qZT58-e2UmYlxQCEWg&usqp=CAU"
          title="Meciul de aseara"
          description="bla bla"
        />
        <NewsCard
          imgSrc="https://e0.365dm.com/22/07/768x432/skysports-efl-ball_5848969.jpg?20220729160849"
          title="Meciul de sambata"
          description="lalala"
        />
      </Container>
    </Layout>
  );
}

export default Home;
