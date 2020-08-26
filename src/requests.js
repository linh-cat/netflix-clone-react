const API_KEY = "c5a5b32015f7bc6e147590951aeda240";

const request = {
  fetchingTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchingTopRate: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchingUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchingPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchingNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
};
export default request;
