import axios from "axios";

// const BASE_URL = "https://readjourney.b.goit.study/api";

const api = axios.create({
  baseURL: "https://readjourney.b.goit.study/api",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

export const setUserSignUp = async (data) => {
  const res = await api.post("/users/signup", data);
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }
};

export const userSignIn = async (data) => {
  const res = await api.post("/users/signin", data);
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }
  console.log("data e", res);
};

export const getLocalStorageToken = () => {
  return localStorage.getItem("token");
};

export const fetchRecommendedBook = async () => {
  try {
    const res = await api.get("/books/recommend?page=1&limit=2");
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
