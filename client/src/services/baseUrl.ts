import axios from "axios";

const baseUrl = "http://localhost:3333";

export const api = axios.create({
  baseURL: baseUrl,
});
