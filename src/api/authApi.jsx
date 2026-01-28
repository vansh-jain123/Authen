import axios from "axios";

const API = axios.create({
  baseURL: "https://e-commerce-mega-kart.vercel.app/api",
});

// Attach token to every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const registerUser = (data) =>
  API.post("/users/register", data);

export const loginUser = (data) =>
  API.post("/users/login", data);

export const getProfile = () =>
  API.get("/users/profile");
