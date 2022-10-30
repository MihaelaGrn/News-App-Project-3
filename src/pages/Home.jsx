import React from "react";
import { Container } from "react-bootstrap";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoryEndpoint } from "../api/endpoints";
import Layout from "../components/Layout";
import NewsCardList from "../components/NewsCardList";
import { getNewsList } from "../api/adaptors";
import { Link } from "react-router-dom";

function Home() {
  const footballUrl = getNewsCategoryEndpoint("football", 1, 6);
  const footballData = useFetch(footballUrl);
  const footballNewsList = getNewsList(footballData);

  const techUrl = getNewsCategoryEndpoint("technology", 1, 6);
  const techData = useFetch(techUrl);
  const techNewsList = getNewsList(techData);

  const environmentUrl = getNewsCategoryEndpoint("environment", 1, 6);
  const environmentData = useFetch(environmentUrl);
  const environmentNewsList = getNewsList(environmentData);

  return (
    <Layout>
      <section className="my-5">
        <Container>
          <h1 className="mb-5 pt-3">Tech</h1>
          <NewsCardList newsList={techNewsList} />
          <p>
            Vezi toate știrile legate de tehnologie în secțiunea{" "}
            <Link to="/category/technology" className="text-secondary">
              Tech
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="my-5">
        <Container>
          <h1 className="mb-5 pt-3">Football</h1>
          <NewsCardList newsList={footballNewsList} />
          <p>
            Vezi toate știrile legate de fotbal în secțiunea{" "}
            <Link to="/category/football" className="text-secondary">
              Fotbal
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="my-5">
        <Container>
          <h1 className="mb-5 pt-3">Environment</h1>
          <NewsCardList newsList={environmentNewsList} />
          <p>
            Vezi toate știrile legate de mediu în secțiunea{" "}
            <Link to="/category/environment" className="text-secondary">
              Fotbal
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="favorites my-5">
        <Container>
          <h1 className="mb-5 pt-3">Favorite</h1>
          <p>
            Vrei să îți salvezi știrile favorite pentru a le reciti mai încolo?
          </p>
          <p>
            În cadrul fiecărei știri găsești un buton prin care poți adăuga
            știrea la favorite.
          </p>
          <p className="pb-3">
            Vizitează secțiunea{" "}
            <Link to="/favorites" className="text-secondary">
              Favorite
            </Link>{" "}
            pentru a vedea știrile adăugate.
          </p>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
