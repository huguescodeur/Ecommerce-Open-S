import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Footer from "../../../partials/Footer";
import NavbarLogout from "../../../partials/NavbarLogout";
import { AppContext } from "../../../App";

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { userInfo, loading } = useContext(AppContext);

  const estConnecte = localStorage.getItem("access_token") ? true : false;

  useEffect(() => {
    if (!loading && !estConnecte) {
      navigate("/connexion", { replace: true, state: { from: location } });
    }
  }, [estConnecte, navigate, location, loading]);

  // const deconnexion = () => {
  //   localStorage.removeItem("access_token");
  //   navigate("/connexion", { replace: true });
  // };

  return (
    <div className="footer-collant">
      <NavbarLogout />
      <Sidebar />
      {estConnecte ? (
        <p style={{ marginTop: "100px" }}>
          {userInfo ? `Bonjour, ${userInfo.username}` : ""} !
        </p>
      ) : (
        <p style={{ marginTop: "100px" }}>Veuillez vous connecter.</p>
      )}

      {/* <button
        style={{
          padding: "10px 8px",
          backgroundColor: "orange",
          width: "130px",
          borderRadius: "6px",
        }}
        onClick={deconnexion}
      >
        Déconnexion
      </button> */}
      <Footer />
    </div>
  );
};

export default Contact;

// import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
// import { useEffect } from "react";
import Sidebar from "./../../../partials/Sidebar";

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
