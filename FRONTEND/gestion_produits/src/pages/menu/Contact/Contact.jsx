import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getUserInfo } from "../../../api/account/auth_api";

import Footer from "../../../partials/Footer";
import NavbarLogout from "../../../partials/NavbarLogout";

const Contact = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // const refreshUserToken = async () => {
    //   const oldToken = localStorage.getItem("access_token");
    //   const newToken = await refreshToken(oldToken);
    //   localStorage.setItem("access_token", newToken);
    // };

    const fetchUserInfo = async () => {
      const info = await getUserInfo();
      setUserInfo(info);
    };

    // refreshUserToken();
    fetchUserInfo();
  }, []);

  console.log(`Les Infos du User: ${userInfo}`);

  const estConnecte = localStorage.getItem("access_token") ? true : false;

  const deconnexion = () => {
    localStorage.removeItem("access_token");
    navigate("/connexion", { replace: true });
  };

  return (
    <div>
      <NavbarLogout />
      {estConnecte ? (
        <p style={{ marginTop: "100px" }}>
          {userInfo ? `Bonjour, ${userInfo.username}` : ""} !
        </p>
      ) : (
        <p style={{ marginTop: "100px" }}>Veuillez vous connecter.</p>
      )}

      <button
        style={{ padding: "10px 8px", backgroundColor: "orange" }}
        onClick={deconnexion}
      >
        Déconnexion
      </button>
      <Footer />
    </div>
  );
};

export default Contact;

// import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
// import { useEffect } from "react";

// const {
//   data: userData,
//   isLoading,
//   error,
// } = useQuery({
//   queryKey: ["users"],
//   queryFn: async () => {},
// });

// const [userInfo, setUserInfo] = useState({});

// useEffect(() => {
//   if (userData) {
//     setUserInfo(userData);
//     console.log(`Les Infos du User: ${userInfo}`);
//   } else if (!userInfo) {
//     console.log("Auncun user");
//   }
// }, [userData]);
