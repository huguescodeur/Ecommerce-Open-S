import ProductCard from "../../menu/Home/components/CardProduct";
import { PropTypes } from "prop-types";

const FilterSearchComponent = ({ products }) => {
  // const products = [
  //   {
  //     id: 1,
  //     name: "T-Shirt Summer Vibes",
  //     price: 89.99,
  //     originalPrice: 119.99,
  //     imgSrc: "https://via.placeholder.com/150",
  //   },
  //   {
  //     id: 2,
  //     name: "Loose Knit 3/4 Sleeve",
  //     price: 119.99,
  //     imgSrc: "https://via.placeholder.com/150",
  //   },
  //   {
  //     id: 3,
  //     name: "Basic Slim Fit T-Shirt",
  //     price: 79.99,
  //     imgSrc: "https://via.placeholder.com/150",
  //   },
  //   {
  //     id: 4,
  //     name: "Cotton Jackets",
  //     price: 129.99,
  //     imgSrc: "https://via.placeholder.com/150",
  //   },
  //   {
  //     id: 5,
  //     name: "Polo T-Shirt",
  //     price: 49.99,
  //     imgSrc: "https://via.placeholder.com/150",
  //   },
  //   {
  //     id: 6,
  //     name: "Formal Shirt",
  //     price: 99.99,
  //     imgSrc: "https://via.placeholder.com/150",
  //   },
  // ];
  return (
    <div className="container mx-auto px-28 mt-28">
      {/* <header className="bg-white shadow p-4 flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mon E-commerce</h1>
        <input
          type="text"
          placeholder="Rechercher des produits..."
          className="w-1/2 p-2 border rounded"
        />
      </header> */}
      <main className="flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 bg-white rounded shadow mb-6 md:mb-0 md:mr-6">
          <h2 className="text-xl font-semibold mb-4">Filtres</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Type de produit</h3>
            <div className="mt-2">
              {["T-Shirts", "Sweatshirts", "Tank Tops", "Dress Shirts"].map(
                (type) => (
                  <label className="flex items-center mb-2" key={type}>
                    <input type="checkbox" className="mr-2" />
                    {type}
                  </label>
                )
              )}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Prix</h3>
            <input type="range" min="0" max="384" className="w-full mt-2" />
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Collection</h3>
            <div className="mt-2">
              {["Ralph Lauren", "Polo", "Versace", "Outfitters"].map(
                (collection) => (
                  <label className="flex items-center mb-2" key={collection}>
                    <input type="radio" name="collection" className="mr-2" />
                    {collection}
                  </label>
                )
              )}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Taille</h3>
            <div className="flex space-x-2 mt-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button key={size} className="border p-2 rounded">
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Couleur</h3>
            <div className="flex space-x-2 mt-2">
              {["red", "blue", "green", "yellow", "purple"].map((color) => (
                <span
                  key={color}
                  className={`w-6 h-6 rounded-full bg-${color}-500 block`}
                ></span>
              ))}
            </div>
          </div>
        </aside>
        <div className="w-full md:w-3/4">
          <header className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Men's Tops (133)</h2>
            <div className="flex items-center">
              <label className="mr-2">Afficher:</label>
              <select className="border p-2 rounded">
                <option>30</option>
                <option>50</option>
                <option>100</option>
              </select>
              <label className="ml-4 mr-2">Trier par:</label>
              <select className="border p-2 rounded">
                <option>Populaire</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
              </select>
            </div>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

FilterSearchComponent.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FilterSearchComponent;
