import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api", // backend Node.js
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
