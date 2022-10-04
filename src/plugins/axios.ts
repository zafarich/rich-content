import axios from "axios";

const ENV_BASE_URL = import.meta.env.VITE_BASE_URL;

const $axios = axios.create({
  baseURL: ENV_BASE_URL,
});

export default $axios;
