import axios from "axios";
import axiosInstance from "./axiosInstance";

export const getTrendingMovies = () => {
  return axiosInstance.get("/trending/movie/day", {
    params: { language: "en-US" },
  });
};
