import axios from "axios";
import axiosInstance from "./axiosInstance";

export const getCastMovies = (movieId) => {
  return axiosInstance.get(`/movie/${movieId}/credits`, {
    params: {
      language: "en-US",
    },
  });
};
