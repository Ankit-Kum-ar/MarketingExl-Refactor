import axios from "axios";

const BASE_URL = "https://marketingexl-refactor.onrender.com/api/v1";
// http://localhost:5000/api/v1/lead/generate
// https://marketingexl-refactor.onrender.com
// https://marketingexl-refactor.onrender.com/api/v1

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;         // The base URL is prepended to all requests i.e. https://example.com/api/v1/...
axiosInstance.defaults.withCredentials = true;     // This is important for authentication to work properly with cookies

export default axiosInstance;