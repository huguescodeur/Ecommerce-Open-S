import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProductCard from "./CardProduct";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React from "react";

// import axiosInstance from "../../../../api/axiosInstance";

const CategoryProduitSection = ({ category, products }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1 }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 100, opacity: 0 },
      }}
    >
      <section className="section-produit px-28 pb-0 bg-white sm:py-16 lg:py-12">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {category}
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600">
              Découvrez notre sélection de produits dans la catégorie {category}
              .
            </p>
          </div>
          <div className="produit-grid grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-6 lg:grid-cols-4">
            {products.slice(0, 8).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          <div className="text-center mt-12 flex justify-center items-center">
            <Link
              to={`/${category}`}
              className="voir-plus bg-orange-500 text-white rounded px-4 py-2"
            >
              Voir plus
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

CategoryProduitSection.propTypes = {
  category: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      nom_produit: PropTypes.string.isRequired,
      prix: PropTypes.number.isRequired,
      image_path: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CategoryProduitSection;
