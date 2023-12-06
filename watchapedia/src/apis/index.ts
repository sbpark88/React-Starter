import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_TMDB_API_HOST}/${process.env.REACT_APP_TMDB_API_VERSION}`,
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY,
    language: "ko-KR",
    region: "KR",
    include_adult: false,
  },
});

export default axiosInstance;
