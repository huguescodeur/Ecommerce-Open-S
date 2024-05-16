import LinesEllipsis from "react-lines-ellipsis";
import PropTypes from "prop-types";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [isFavorited, setFavorited] = useState(false); // Ajoutez un état pour le favori

  const toggleFavorite = () => {
    setFavorited(!isFavorited); // Changez l'état favori lorsque l'icône de cœur est cliquée
  };

  return (
    <div className="relative group cursor-pointer mb-3">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          style={{ height: "250px", width: "100%", borderRadius: "10px" }}
          className="object-fill  transition-all duration-300 group-hover:scale-125"
          src={product.image}
          alt={product.name}
        />
        {isFavorited ? (
          <FaHeart
            onClick={toggleFavorite}
            className="absolute top-0 right-0 m-2 text-red-500 cursor-pointer"
          /> // Cœur rempli pour l'état favori
        ) : (
          <FaRegHeart
            onClick={toggleFavorite}
            className="absolute top-0 right-0 m-2 text-gray-500 cursor-pointer"
          /> // Cœur vide pour l'état non favori
        )}
      </div>
      <div className="p-2 flex flex-col justify-between h-32">
        <div>
          <div>
            <LinesEllipsis
              text={product.name}
              maxLine="2"
              ellipsis=".."
              trimRight
              basedOn="letters"
              className="product-name text-s font-semibold"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-semibold text-gray-400">
            ${product.price}
          </span>
          <button className="bg-orange-400 rounded px-2 py-1">Panier</button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
