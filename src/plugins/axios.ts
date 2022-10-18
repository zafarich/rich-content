import axios from "axios";

const VITE_FILE_URL = import.meta.env.VITE_FILE_URL;

const $axios = axios.create({
  baseURL: VITE_FILE_URL,
});

export default $axios;
