// import {
//     Card,
//     Input,
//     Checkbox,
//     Button,
//     Typography,
// } from "@material-tailwind/react";
// import rightBag from "../../assets/images/icons/homme-femme-bag.png"
import Footer from "../../partials/Footer";
import NavbarLogout from "../../partials/NavbarLogout";
import InscriptionFormLayout from "../layouts/InscriptionFormLayout";

const Inscription = () => {
    return (
        <div className="div-inscription">
            <NavbarLogout />

            <InscriptionFormLayout />

            <Footer />
        </div>
    );
}

export default Inscription;