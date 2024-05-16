// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AppContext } from "../../../App";

import NavbarLogout from "../../../partials/NavbarLogout";
// import SimpleSlider from "./components/SimpleSlider";
import Footer from "../../../partials/Footer";
import HeaderHome from "./components/HeaderHome";
// import TopNav from "../../../components/TopNav";
import Search from "./../../../components/Search";
import Sidebar from "../../../partials/Sidebar";
import BestSceller from "./components/BestSceller";
import data from "../../../data/data.json";

// import ProductCard from "./components/CardProduct";

const Home = () => {
  // const queryKey = useMemo(() => ["cat", Date.now()], []);

  // const { userInfo } = useContext(AppContext);

  // print(userInfo);

  // if (isLoding) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="div-home  border">
      <NavbarLogout />
      <Sidebar />
      <Search />
      <HeaderHome />
      <BestSceller products={data.products} />
      <Footer />
    </div>
  );
};

export default Home;
