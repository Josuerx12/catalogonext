import axios from "axios";

export const api = axios.create({
  baseURL: "https://catalogofst.josuecarvalho.cloud/",
  headers: { "Content-Type": "application/json" },
});
