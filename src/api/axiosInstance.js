import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTA3MWJhOTc4MWYxOWVkNWM2Mzk1MDc4OGRiYTgyNCIsIm5iZiI6MTc0NDQ4MDIwMS4xOTUwMDAyLCJzdWIiOiI2N2ZhYTdjOWEwNGY1MzBiNWM5OTYyZDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xLaMQmHsSDXD9eKNUizU2-yQnPTT0TDlpNLa_nG1WTA";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default axiosInstance;
