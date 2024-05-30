import ProductCard from "./../../menu/Home/components/CardProduct";

const DetailsProduitsComponent = () => {
  const product = [
    {
      name: "LD05 Lounge Chair",
      price: 300,
      description:
        "Inspirée du design moderne du milieu du siècle, cette chaise longue introduite pour la première fois en 1951 n'a pas perdu de sa pertinence ou de son attrait. C'est un mélange emblématique d'élégance sophistiquée et de confort qui s'intègre bien dans les espaces contemporains et classiques, offrant une polyvalence dans le choix des tissus ainsi que des finitions personnalisées",
      // image: "https://via.placeholder.com/400x400",
      image:
        "https://www.meublesconcept.fr/img/cms/eames-lounge-chair-meubles-concept.jpg",
    },
    {
      name: "LD05 Lounge Chair",
      price: 300,
      description:
        "Inspirée du design moderne du milieu du siècle, cette chaise longue introduite pour la première fois en 1951 n'a pas perdu de sa pertinence ou de son attrait. C'est un mélange emblématique d'élégance sophistiquée et de confort qui s'intègre bien dans les espaces contemporains et classiques, offrant une polyvalence dans le choix des tissus ainsi que des finitions personnalisées. ",
      // image: "https://via.placeholder.com/400x400",
      image:
        "https://www.meublesconcept.fr/img/cms/eames-lounge-chair-meubles-concept.jpg",
    },
    {
      name: "LD05 Lounge Chair",
      price: 300,
      description:
        "Inspirée du design moderne du milieu du siècle, cette chaise longue introduite pour la première fois en 1951 n'a pas perdu de sa pertinence ou de son attrait. C'est un mélange emblématique d'élégance sophistiquée et de confort qui s'intègre bien dans les espaces contemporains et classiques, offrant une polyvalence dans le choix des tissus ainsi que des finitions personnalisées.",
      // image: "https://via.placeholder.com/400x400",
      image:
        "https://www.meublesconcept.fr/img/cms/eames-lounge-chair-meubles-concept.jpg",
    },
    {
      name: "LD05 Lounge Chair",
      price: 300,
      description:
        "Inspirée du design moderne du milieu du siècle, cette chaise longue introduite pour la première fois en 1951 n'a pas perdu de sa pertinence ou de son attrait. C'est un mélange emblématique d'élégance sophistiquée et de confort qui s'intègre bien dans les espaces contemporains et classiques, offrant une polyvalence dans le choix des tissus ainsi que des finitions personnalisées.",
      // image: "https://via.placeholder.com/400x400",
      image:
        "https://www.meublesconcept.fr/img/cms/eames-lounge-chair-meubles-concept.jpg",
    },
    {
      name: "LD05 Lounge Chair",
      price: 300,
      description:
        "Inspirée du design moderne du milieu du siècle, cette chaise longue introduite pour la première fois en 1951 n'a pas perdu de sa pertinence ou de son attrait. C'est un mélange emblématique d'élégance sophistiquée et de confort qui s'intègre bien dans les espaces contemporains et classiques, offrant une polyvalence dans le choix des tissus ainsi que des finitions personnalisées. Inspirée du design moderne du milieu du siècle, cette chaise longue introduite pour la première fois en 1951 n'a pas perdu de sa pertinence ou de son attrait. .",
      // image: "https://via.placeholder.com/400x400",
      image:
        "https://www.meublesconcept.fr/img/cms/eames-lounge-chair-meubles-concept.jpg",
    },
  ];
  return (
    <div className="section-product-details container mt-28 px-28">
      <div className="div-details bg-white shadow-md rounded-lg p-6">
        <div className="div-details-image-infos flex flex-col lg:flex-row items-center lg:items-center">
          <img
            src={product[0].image}
            alt="LD05 Lounge Chair"
            className="details-image w-full h-full lg:w-1/2 mx-auto lg:mx-0"
          />
          <div className="details-infos h-full flex flex-col justify-center items-center lg:ml-6 mt-6 lg:mt-0 text-center lg:text-left">
            <h1 className="text-3xl font-bold mt-4 lg:mt-0">
              LD05 LOUNGE CHAIR
            </h1>
            <p className="text-xl text-gray-600 font-bold mt-2">$300</p>
            <p className="text-gray-700 mt-4">
              {product[0].description}
              {/* <LinesEllipsis
                text={product[0].description}
                maxLine="3"
                ellipsis=".."
                trimRight
                basedOn="letters"
                // className="product-name text-s font-semibold"
              /> */}
            </p>
            <div className="mt-6">
              <button className="bg-orange-500 text-black py-2 px-4 rounded mr-2">
                Check Out
              </button>
              <button className="bg-gray-800 text-white py-2 px-4 rounded">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Similar product</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduitsComponent;
