// import { useState } from "react";
import { Link } from "react-router-dom";

import shoppingBagIcon from "../assets/images/icons/shopping-cart.png";
import personIcon from "../assets/images/icons/person.png";
import heartIcon from "../assets/images/icons/heart.png";
import { useContext } from "react";
import Searnh from "../components/Search";
import { SidebarContext } from "./SidebarContext";

const NavbarLogout = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  return (
    <div
      id="navbar"
      className="px-28 p-8 div-navbar  flex justify-between items-center bg-white "
    >
      <div className="div-gauche   flex  items-center">
        {!sidebarOpen && (
          <span
            className="open-menu cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          >
            &#9776;
          </span>
        )}

        <h2 className="quantum text-orange-500 " id="quantum">
          Quantum
        </h2>
      </div>

      <Searnh />

      <div className="div-droit  flex justify-around items-center ml-8">
        <Link to="/about">
          <div className="div-icon  mr-2">
            <img
              src={personIcon}
              alt="Person Icon"
              className="border-2 rounded"
            />
          </div>
        </Link>
        <div className="div-icon mr-2">
          <img src={heartIcon} alt="Heart Icon" className="border-2 rounded" />
        </div>
        <div className="div-icon">
          <img
            src={shoppingBagIcon}
            alt="Shopping Cart Icon"
            className="border-2 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarLogout;

// ref={navbarRef}

{
  /* <SimpleIcon/> */
}
/* import { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "./SidebarContext";

const Sidebar = () => {
  const currentYear = new Date().getFullYear();
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  return (
    <div 
    className="sidebar fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 h-full text-white transition-all duration-300 border-none z-10 sidebar"
    >
      <div className="h-14 w-full flex items-center pl-4">
        <span className="close-menu mr-2" onClick={() => setSidebarOpen(false)}>
          &#10005;
        </span>
        <h2 className="text-orange-500 tracking-wide truncate">Quantum</h2>
      </div>
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
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

          <li>
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
          </li>

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

          <li>
            <Link
              to="/"
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
        </ul>
        <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
          Copyright © HuguesCodeur - {currentYear}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;*/

// import { useEffect, useRef } from "react";
// import searchWhiteIcon from "../assets/images/icons/search-ios-white.png";
// import { Person } from "@mui/icons-material";
// import SimpleIcon from './../pages/menu/Home/SimpleIcon';

// const navbarRef = useRef();

// useEffect(() => {
//   let lastScroll = 0;
//   console.log(lastScroll);

//   const handleScroll = () => {
//     const navbar = navbarRef.current;
//     if (window.scrollY < lastScroll) {
//       navbar.style.top = "0";
//     } else {
//       navbar.style.top = "-90px";
//     }
//     lastScroll = window.scrollY;
//     console.log(lastScroll);
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);
