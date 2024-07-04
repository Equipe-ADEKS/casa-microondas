import axios from "axios";

const URL_Servidor = "http://localhost:5000";

const API = axios.create({
    baseURL: URL_Servidor
})

export default API