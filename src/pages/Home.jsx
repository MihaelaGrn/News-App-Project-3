import React from "react";
import { Container } from "react-bootstrap";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoryEndpoint } from "../api/endpoints";
import Layout from "../components/Layout";
import NewsCardList from "../components/NewsCardList";
import { getNewsList } from "../api/adaptors";

function Home() {
  const footballUrl = getNewsCategoryEndpoint("football", 1, 6);
  const footballData = useFetch(footballUrl);
  const footballNewsList = getNewsList(footballData);

  const techUrl = getNewsCategoryEndpoint("technology", 1, 6);
  const techData = useFetch(techUrl);
  const techNewsList = getNewsList(techData);

  return (
    <Layout>
      <section className="my-5">
        <Container>
          <h1 className="mb-5 pt-3">Tech</h1>
          <NewsCardList newsList={techNewsList} />
        </Container>
      </section>
      <section className="my-5">
        <Container>
          <h1 className="mb-5 pt-3">Football</h1>
          <NewsCardList newsList={footballNewsList} />
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
