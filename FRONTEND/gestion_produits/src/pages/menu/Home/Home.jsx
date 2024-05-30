// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AppContext } from "../../../App";
// import SimpleSlider from "./components/SimpleSlider";
// import TopNav from "../../../components/TopNav";
// import ProductCard from "./components/CardProduct";

import NavbarLogout from "../../../partials/NavbarLogout";
import Footer from "../../../partials/Footer";
import HeaderHome from "./components/HeaderHome";
import Search from "../../../components/SearchComponent";
import Sidebar from "../../../partials/Sidebar";
import BestSceller from "./components/BestSceller";
import data from "../../../data/data.json";
import { useContext } from "react";

import CategoryProduitSection from "./components/CategoryProduitSection";
import RecommendedSection from "./components/RecommendedSection";


import { AppContext } from "./../../../App";

const Home = () => {

  const { produits, categories } = useContext(AppContext);

  console.log("Catégorie:", categories);

  return (
    <div className="div-home footer-collant">
      <NavbarLogout />
      <Sidebar />
      <Search />
      <HeaderHome />
      <RecommendedSection recommendedProducts={data.products} />
      <BestSceller products={data.products} />

      {categories.map((categorie) => {
        return (
          <CategoryProduitSection
            key={categorie.id}
            category={categorie.nom_categorie}
            products={produits
              .filter(
                (product) => product.nom_categorie === categorie.nom_categorie
              )
              .slice(0, 8)}
          />
        );
      })}

      <Footer />
    </div>
  );
};

export default Home;

// import { getProducts } from "../../../api/product/produits_api";
// import { useEffect, useState } from "react";

// const [produits, setProduits] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const fetchedProducts = await getProducts();
  //     if (fetchedProducts) {
  //       setProduits(fetchedProducts);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  // console.log(produits);

 {
   /* <CategoryProduitSection
        category="Chaussures"
        products={produits
          .filter((product) => product.nom_categorie === "chaussures")
          .slice(0, 8)}
      /> */
 }


{
  /* <CategoryProduitSection
        category="Téléphone & Tablettes"
        products={produits
          .filter((product) => product.categorie === "Téléphone & Tablettes")
          .slice(0, 8)}
      />
      <CategoryProduitSection
        category="TV & Electronique"
        products={produits
          .filter((product) => product.categorie === "TV & Electronique")
          .slice(0, 8)}
      />
      <CategoryProduitSection
        category="Electromenager"
        products={produits
          .filter((product) => product.categorie === "Electromenager")
          .slice(0, 8)}
      />
      <CategoryProduitSection
        category="Informatique"
        products={produits
          .filter((product) => product.categorie === "Informatique")
          .slice(0, 8)}
      />
      <CategoryProduitSection
        category="Produits pour bébés"
        products={produits
          .filter((product) => product.categorie === "Produits pour bébés")
          .slice(0, 8)}
      /> */
}
{
  /* <CategoryProduitSection
        category="Téléphone & Tablettes"
        products={data.products}
      />
      <CategoryProduitSection
        category="TV & Electronique"
        products={data.products}
      />
      <CategoryProduitSection
        category="Electromenager"
        products={data.products}
      />
      <CategoryProduitSection
        category="Informatique"
        products={data.products}
      />
      <CategoryProduitSection
        category="Produits pour bébés"
        products={data.products}
      /> */
}

