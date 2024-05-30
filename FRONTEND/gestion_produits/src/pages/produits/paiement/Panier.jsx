import Footer from "../../../partials/Footer";
import NavbarLogout from "../../../partials/NavbarLogout";
import PanierComponent from "../components/PanierComponent";
import Sidebar from './../../../partials/Sidebar';

const Pannier = () => {
  return (
    <div className="panier footer-collant">
      <NavbarLogout />
      <Sidebar />
      <PanierComponent />
      <Footer />
    </div>
  );
};

export default Pannier;
