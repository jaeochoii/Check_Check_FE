import axios from "axios";

const API_BASE_URL = "http://54.254.183.233:8080";

interface LoginCredentials {
  username: string;
  password: string;
}

interface SignupData {
  username: string;
  password: string;
  nickname: string;
}

export const login = async (credentials: LoginCredentials): Promise<any> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.data.refreshToken && response.data.accessToken) {
      localStorage.setItem("refreshToken", response.data.refreshToken);
      localStorage.setItem("accessToken", response.data.accessToken);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signup = async (
  data: SignupData,
  accessToken: string
): Promise<any> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/join`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAccessToken = async (refreshToken: string): Promise<string> => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/accesstoken`,
      {},
      {
        headers: {
          "Refresh-Token": refreshToken,
        },
      }
    );
    const newAccessToken = response.data.accessToken;
    localStorage.setItem("accessToken", newAccessToken);
    return newAccessToken;
  } catch (error) {
    throw error;
  }
};
