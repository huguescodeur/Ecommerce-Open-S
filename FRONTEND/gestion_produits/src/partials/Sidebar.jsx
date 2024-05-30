import { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "./SidebarContext";
import { AppContext } from "./../App";

import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  const currentYear = new Date().getFullYear();

  const { userInfo } = useContext(AppContext);

  const navigate = useNavigate();
  // const location = useLocation();

  // const { userInfo, loading } = useContext(AppContext);

  // const estConnecte = localStorage.getItem("access_token") ? true : false;

  // useEffect(() => {
  //   if (!estConnecte) {
  //     navigate("/connexion", { replace: true, state: { from: location } });
  //   }
  // }, [estConnecte, navigate, location]);

  const deconnexion = () => {
    localStorage.removeItem("access_token");
    navigate("/connexion", { replace: true });
  };

  return (
    sidebarOpen && (
      <div className="sidebar fixed flex flex-col top-14 left-0  hover:w-64 md:w-64 h-full text-white transition-all duration-300 border-none z-10 ">
        <div className="h-14 w-full flex items-center pl-4 pt-4">
          <span
            className="close-menu mr-2 cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          >
            &#10005;
          </span>
          {/* text-orange-500 */}
          <h2 className="quantum  tracking-wide truncate">Quantum</h2>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul className="flex flex-col space-y-1 mt-2 mr-2">
            <li>
              <Link
                to="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-400 text-white hover:text-gray-800 border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <i className="fas fa-home"></i>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Accueil
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-400 text-white hover:text-gray-800 border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <i className="fas fa-mobile-alt"></i>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Téléphone & Tablettes
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-400 text-white hover:text-gray-800 border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <i className="fas fa-tv"></i>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  TV & Electronique
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-400 text-white hover:text-gray-800 border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <i className="fas fa-blender"></i>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Electromenager
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-400 text-white hover:text-gray-800 border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <i className="fas fa-laptop"></i>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Informatique
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-400 text-white hover:text-gray-800 border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <i className="fas fa-baby-carriage"></i>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Produits pour bébés
                </span>
              </Link>
            </li>

            {/* <li>
              <Link
                to="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-400 text-white hover:text-gray-800 border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <i className="fas fa-heart"></i>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Favoris
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-400 text-white hover:text-gray-800 border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <i className="fas fa-shopping-cart"></i>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Panier
                </span>
              </Link>
            </li> */}

            <li>
              <Link
                to="/about"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-400 text-white hover:text-gray-800 border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <i className="fas fa-info-circle"></i>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  A propos
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-400 text-white hover:text-gray-800 border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Contact
                </span>
              </Link>
            </li>

            {userInfo && (
              <li>
                <Link
                  to="/"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-400 text-white hover:text-gray-800 border-l-4 border-transparent"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <i className="fas fa-cog"></i>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Paramètres
                  </span>
                </Link>
              </li>
            )}

            {userInfo && (
              <li>
                <Link
                  to="/connexion"
                  onClick={deconnexion}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-400 text-white hover:text-gray-800 border-l-4 border-transparent"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <i className="fas fa-sign-out-alt"></i>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Déconnexion
                  </span>
                </Link>
              </li>
            )}
          </ul>
          <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
            Copyright © HuguesCodeur - {currentYear}
          </p>
        </div>
      </div>
    )
  );
};

export default Sidebar;
