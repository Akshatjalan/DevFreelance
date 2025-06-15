import axios from "axios";

const isLocal = window.location.hostname === "localhost";

const newRequest = axios.create({
  baseURL: isLocal
    ? "http://localhost:8800/api/"
    : process.env.REACT_APP_API_URL,
  withCredentials: true,
});

export default newRequest;