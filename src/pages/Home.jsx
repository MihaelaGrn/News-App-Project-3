import React from "react";
import { Container } from "react-bootstrap";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoryEndpoint } from "../api/endpoints";

function Home() {
  const footballUrl = getNewsCategoryEndpoint("football", 1, 6);
  const footballData = useFetch(footballUrl);
  console.log(footballData);

  const techUrl = getNewsCategoryEndpoint("technology", 2, 6);
  const techData = useFetch(techUrl);
  console.log(techData);
  return (
    <div>
      <Container>Home</Container>
    </div>
  );
}

export default Home;
