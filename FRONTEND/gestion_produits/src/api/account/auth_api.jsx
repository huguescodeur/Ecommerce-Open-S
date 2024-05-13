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
      role: role,
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

// ? Token is expired
function isTokenExpired(token) {
  // Decode the token and check the 'exp' field
  const decodedToken = jwt_decode.jwtDecode(token);
  const currentTime = Date.now() / 1000;

  return decodedToken.exp < currentTime;
}

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
