const API_KEY = "9dd458d3-ac9b-41f7-be53-038238bc36f3";

export function getNewsCategoryEndpoint(category, page = 1, pageSize = 20) {
  const querryParams = `?api-key=${API_KEY}&section=${category}&page-size=${pageSize}&page=${page}&show-fields=all`;
  return `https://content.guardianapis.com/search${querryParams}`;
}
