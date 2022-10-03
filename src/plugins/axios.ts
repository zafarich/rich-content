import axios from "axios";

const $axios = axios.create({
  baseURL: "https://files.techno-mart.uz/api",
});

export default $axios;
