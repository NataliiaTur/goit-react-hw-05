import axios from "axios";
import axiosInstance from "./axiosInstance";

export const getDetailsMovie = (movieId) => {
  return axiosInstance.get(`/movie/${movieId}`, {
    params: {
      language: "en-US",
    },
  });
};
