import Footer from "../../../partials/Footer";
import NavbarLogout from "../../../partials/NavbarLogout";
import PaiementComponent from "../components/PaiementComponent";
import Sidebar from "./../../../partials/Sidebar";

const Paiement = () => {
  return (
    <div className="paiement footer-collant">
      <NavbarLogout />
      <Sidebar />
      <PaiementComponent />
      <Footer />
    </div>
  );
};

export default Paiement;
