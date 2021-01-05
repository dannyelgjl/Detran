import axios from "axios";

const api = axios.create({
  baseURL: "http://api.detranpi.brasiltecnologia.net.br/api/detran/totem/v1/",
});

export default api;
