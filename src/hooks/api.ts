import axios from "axios";

const API_URL = "";

interface RegisterData {
  username: string;
  password: string;
  nickname: string;
}

interface LoginData {
  username: string;
  password: string;
}

interface JwtResponse {
  token: string;
}

export const register = async (data: RegisterData): Promise<string> => {
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || error.message);
  }
};

export const login = async (data: LoginData): Promise<JwtResponse> => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    const token = response.data.token;
    localStorage.setItem("token", token);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || error.message);
  }
};

const api = axios.create({
  baseURL: API_URL,
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
    return Promise.reject(error);
  }
);

export default api;
