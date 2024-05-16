import ProductCard from "./CardProduct";

import PropTypes from "prop-types";

const BestSceller = ({ products }) => {
  return (
    <section className="section-produit px-28 py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Nos meilleurs produits
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600">
            Découvrez notre sélection exclusive des meilleurs produits,
            soigneusement choisis pour répondre à vos besoins et à vos envies.
            Explorez notre gamme diversifiée comprenant des articles de haute
            qualité, des nouveautés tendance et des incontournables de la
            saison. Trouvez les produits parfaits qui correspondent à votre
            style de vie et à votre budget.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

BestSceller.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BestSceller;
