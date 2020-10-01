import axios from "axios";

const api = axios.create({
  baseURL:
    "http://api.detranpi.brasiltecnologia.net.br/api/detran/v1/impost/billet_cpf",
});

export default api;
