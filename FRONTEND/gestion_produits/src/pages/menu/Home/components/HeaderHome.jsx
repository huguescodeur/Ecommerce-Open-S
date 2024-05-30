// import React from 'react'
// import { header } from "../../../../assets/images/banner/header.png";
// import Search from "../../../../components/Search";
import SearchHome from "./SearchHome";
import SimpleSlider from "./SimpleSlider";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeaderHome = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
        <SearchHome />
        <header className="div-home-header flex justify-around px-28">
          <nav className="pl-4 border rounded shadow">
            <ul className=" ">
              <Link to="/" className="link-styles">
                Accueil
              </Link>

              <Link to="/telephone-tablette" className="link-styles">
                Téléphone & Tablettes
              </Link>
              <Link to="/electronique" className="link-styles">
                TV & Electronique
              </Link>

              <Link to="/electromenager" className="link-styles">
                Electromenager
              </Link>
              <Link to="/informatique" className="link-styles">
                Informatique
              </Link>
              <Link to="/produit-bebe" className="link-styles">
                Produits pour bébés
              </Link>
              <Link to="/about" className="link-styles">
                A propos
              </Link>
              <Link to="/contact" className="link-styles">
                Contact
              </Link>
            </ul>
          </nav>

          <div className="header-baniere ">
            <SimpleSlider />
          </div>
        </header>
      </div>
    </motion.div>
  );
};

export default HeaderHome;
