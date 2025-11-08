// src/components/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://rescued.onrender.com", // backend URL
  headers: {
    "Content-Type": "application/json", // default for JSON requests
  },
});

export default API;
