export const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3001/imdb/stuball");
    const movieList = await response.json();
    return movieList;
  } catch (e) {
    console.log(e);
  }
};
