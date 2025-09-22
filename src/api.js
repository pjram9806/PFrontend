import axios from "axios";

const api = axios.create({
  baseURL: "http://132.156.145.6:6500", // backend URL
});

export default api;
