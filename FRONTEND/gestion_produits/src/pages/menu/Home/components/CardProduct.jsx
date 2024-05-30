import LinesEllipsis from "react-lines-ellipsis";
import PropTypes from "prop-types";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [isFavorited, setFavorited] = useState(false);

  const toggleFavorite = () => {
    setFavorited(!isFavorited);
  };

  return (
    <div className="relative group cursor-pointer mb-3">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          style={{ height: "250px", width: "100%", borderRadius: "10px" }}
          className="object-cover transition-all duration-300 group-hover:scale-125"
          src={product.image_path}
          alt={product.nom_produit}
        />
        {isFavorited ? (
          <FaHeart
            onClick={toggleFavorite}
            className="absolute top-0 right-0 m-2 text-orange-500 cursor-pointer"
          />
        ) : (
          <FaRegHeart
            onClick={toggleFavorite}
            className="absolute top-0 right-0 m-2 text-gray-600 cursor-pointer"
          />
        )}
      </div>
      <div className="p-2 flex flex-col justify-between h-32">
        <div>
          <div>
            <LinesEllipsis
              text={product.nom_produit}
              maxLine="2"
              ellipsis=".."
              trimRight
              basedOn="letters"
              className="product-name text-s font-semibold"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-semibold text-gray-600">
            {product.prix} FCFA
          </span>
          <button className="pannier rounded bg-gray-800 text-white px-2 py-1">
            Panier
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    nom_produit: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    image_path: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
