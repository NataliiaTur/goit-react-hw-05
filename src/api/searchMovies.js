import axios from "axios";
import axiosInstance from "./axiosInstance";

export const searchMovies = (query) => {
  return axiosInstance.get("/search/movie", {
    params: {
      query,
      language: "en-US",
      page: 1,
    },
  });
};
