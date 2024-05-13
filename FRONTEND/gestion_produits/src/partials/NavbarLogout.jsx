import { Link } from "react-router-dom";
import { useEffect, useRef } from "react"

import shoppingBagIcon from "../assets/images/icons/shopping-cart.png"
import personIcon from "../assets/images/icons/person.png"
import heartIcon from "../assets/images/icons/heart.png"
import searchWhiteIcon from "../assets/images/icons/search-ios-white.png"


// import { Person } from "@mui/icons-material";
// import SimpleIcon from './../pages/menu/Home/SimpleIcon';

const NavbarLogout = () => {
  const navbarRef = useRef();

  useEffect(() => {
    let lastScroll = 0;
    console.log(lastScroll)

    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (window.scrollY < lastScroll) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-90px";
      }
      lastScroll = window.scrollY;
      console.log(lastScroll)
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="navbar" ref={navbarRef} className="px-28 p-8 div-navbar  flex justify-between items-center bg-white ">
      <div className="div-gauche   flex  items-center">
        <h2>Mon Logo</h2>
      </div>

      <div className="div-milieu  flex justify-center items-center">
        <form className="flex flex-col md:flex-row gap-3 w-full">
          {/* <select id="pricingType" name="pricingType"
            className="w-1/5 h-10 border-2 border-orange-500 focus:outline-none focus:border-orange-500 text-gray-400 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
            <option value="All" selected="" className="">All</option>
            <option value="Freemium">Freemium</option>
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
          </select> */}
          {/* w-4/5 */}
          <div className="flex  w-full	">
            <input type="text" placeholder="Recherche un produit"
              className="w-full md:w-90 px-3 h-10 rounded-l border-2 border-orange-400  focus:outline-none focus:border-orange-500"
            />
            <button type="submit" className=" bg-orange-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"> <img src={searchWhiteIcon} alt="Search Icon" style={{ width: "25px" }} /> </button>
          </div>

        </form>
      </div>

      <div className="div-droit  flex justify-around items-center ml-8">

        <Link to="/about">
          <div className="div-icon  mr-2">
            <img src={personIcon} alt="Person Icon" className="border-2 rounded" />
          </div>
        </Link>
        <div className="div-icon mr-2">
          <img src={heartIcon} alt="Heart Icon" className="border-2 rounded" />
        </div>
        <div className="div-icon">
          <img src={shoppingBagIcon} alt="Shopping Cart Icon" className="border-2 rounded" />
        </div>


        {/* <SimpleIcon/> */}
      </div>
    </div>
  );
};



export default NavbarLogout;

