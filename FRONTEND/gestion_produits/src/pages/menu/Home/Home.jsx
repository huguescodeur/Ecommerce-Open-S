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
      <Search />
      <HeaderHome />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default Home;
