import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
console.log("API Key on Vercel:", import.meta.env.VITE_API_KEY);

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default axiosInstance;
