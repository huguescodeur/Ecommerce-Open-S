import Footer from "../../../partials/Footer";
import FilterSearchComponent from "../components/FilterSearchComponent";
import NavbarLogout from "../../../partials/NavbarLogout";
import data from "../../../data/data.json";

const SearchProduct = () => {
  return (
    <div className="search w-full footer-collant">
      <NavbarLogout />
      <FilterSearchComponent products={data.products} />
      <Footer />
    </div>
  );
};

export default SearchProduct;
