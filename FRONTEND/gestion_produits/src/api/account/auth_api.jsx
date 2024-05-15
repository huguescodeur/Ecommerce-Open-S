import { data } from "autoprefixer";
import axios from "axios";
import * as jwt_decode from "jwt-decode";

// ? Refresh Token
export const refreshToken = async () => {
  const refreshToken = localStorage.getItem("refresh_token");
  if (refreshToken) {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/token/refresh/",
        {
          refresh: refreshToken,
        }
      );

      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);

      return response.data.access;
    } catch (error) {
      console.error("Erreur lors du rafraîchissement du token", error);
      return null;
    }
  } else {
    return null;
  }
};

// ? API Register
export const register = async (
  username,
  email,
  password,
  confirm_password,
  role
) => {
  try {
    const response = await axios.post("http://localhost:8000/api/register/", {
      username,
      email,
      password,
      confirm_password,
      role,
    });

    const tokenResponse = await axios.post("http://localhost:8000/api/token/", {
      username,
      password,
    });

    console.log(tokenResponse);
    console.log(tokenResponse.data.access);

    localStorage.setItem("access_token", tokenResponse.data.access);
    localStorage.setItem("refresh_token", tokenResponse.data.refresh);

    console.log(data);

    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'inscription", error);
    return error;
  }
};

// ? API Login
export const login = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:8000/api/login/", {
      email,
      password,
    });

    console.log(`Response: ${response}`);

    localStorage.setItem("access_token", response.data.access_token);
    localStorage.setItem("refresh_token", response.data.refresh_token);
    
    console.log(data);

    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'inscription", error);
    return error;
  }
};

// ? Token is expired
// function isTokenExpired(token) {
//   // Decode the token and check the 'exp' field
//   const decodedToken = jwt_decode.jwtDecode(token);
//   const currentTime = Date.now() / 1000;

//   return decodedToken.exp < currentTime;
// }

const isTokenExpired = (token) => {
  if (!token) {
    return null;
  }
  try {
    const { exp } = jwt_decode.jwtDecode(token);
    return Date.now() >= exp * 1000;
  } catch {
    return "Error decoding token";
  }
};

// ? Get User Info
export const getUserInfo = async () => {
  let token = localStorage.getItem("access_token");

  // Refresh the token if it's expired
  if (isTokenExpired(token)) {
    token = await refreshToken();
  }

  if (token) {
    const response = await axios.get("http://localhost:8000/api/user_info/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } else {
    return null;
  }
};
