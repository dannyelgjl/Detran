import axios from "axios";

const api = axios.create({
  baseURL: "http://191.252.218.130/",
});

export default api;
