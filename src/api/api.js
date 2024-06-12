import axios from "axios";

const URL_Servidor = "https; localhost:3000";

const API = axios.create({
    baseURL: URL_Servidor

})

export default API