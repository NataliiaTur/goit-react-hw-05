import axios from "axios";
import axiosInstance from "./axiosInstance";

export const getReviewsMovie = (movieId) => {
  return axiosInstance.get(`/movie/${movieId}/reviews`, {
    params: {
      language: "en-US",
    },
  });
};
