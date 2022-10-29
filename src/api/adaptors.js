export function getNewsList(apiResponse) {
  if (!apiResponse || !apiResponse.response) {
    return [];
  }
  const rawNewsList = apiResponse.response.results;
  const adaptedNewsList = rawNewsList.map((news) => {
    return {
      id: news.id,
      imgSrc: news.fields.thumbnail,
      title: news.webTitle,
      description: news.fields.trailText,
    };
  });

  return adaptedNewsList;
}

export function getNewsDetails(apiResponse) {
  if (!apiResponse || !apiResponse.response) {
    return [];
  }
  const rawNewsDetails = apiResponse.response.content;
  const adaptedNewsDetails = {
    title: rawNewsDetails.fields.headline,
    description: rawNewsDetails.fields.trailText,
    image: rawNewsDetails.fields.main,
    content: rawNewsDetails.fields.body,
  };
  return adaptedNewsDetails;
}
