import ProductCard from "./CardProduct";
import PropTypes from "prop-types";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RecommendedSection = ({ recommendedProducts }) => {
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
      <section className="section-produit px-28 mt-8 pb-0 bg-white sm:py-16 lg:py-12">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Recommandés pour vous
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600">
              Découvrez notre sélection de produits recommandés spécialement
              pour vous.
            </p>
          </div>
          <div className="produit-grid grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-6 lg:grid-cols-4">
            {recommendedProducts.slice(0, 8).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

RecommendedSection.propTypes = {
  recommendedProducts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RecommendedSection;
