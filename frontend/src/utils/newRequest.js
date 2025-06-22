import axios from "axios";

const isLocal = window.location.hostname === "localhost";

const newRequest = axios.create({
  baseURL: isLocal
    ? "http://localhost:8800/api/"
    : process.env.REACT_APP_API_URL,
});

newRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default newRequest;