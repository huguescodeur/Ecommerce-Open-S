import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../App";

import NavbarLogout from "../../../partials/NavbarLogout";
import SimpleSlider from "./components/SimpleSlider";
import Footer from "../../../partials/Footer";



const Home = () => {
  // const queryKey = useMemo(() => ["cat", Date.now()], []);

  const { username } = useContext(AppContext);

  // if (isLoding) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="div-home  border">
      <NavbarLogout />
      <header className="div-home-header flex justify-around   px-28 mt-28">
        <nav className="pl-4 border rounded shadow">
          <ul className=" ">
            <Link to="/" className="link-styles">
              Home
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


      <Footer />
    </div>
  );
};

export default Home;
