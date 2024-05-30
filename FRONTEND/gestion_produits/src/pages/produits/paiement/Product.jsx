import Footer from "../../../partials/Footer";
import NavbarLogout from "../../../partials/NavbarLogout";
import DetailsProduitsComponent from "../components/DetailsProduitsComponent";
// import TestDetails from "../components/TestDetails";
import Sidebar from "./../../../partials/Sidebar";

const Product = () => {
  return (
    <div>
      <NavbarLogout />
      <Sidebar />
      {/* <TestDetails /> */}
      <DetailsProduitsComponent />
      <Footer />
    </div>
  );
};

export default Product;
