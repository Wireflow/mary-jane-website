import axios from "axios";

const baseURL = process.env.HOST || "http://localhost:3000";

export default axios.create({
  baseURL,
  timeout: 10000,
});
