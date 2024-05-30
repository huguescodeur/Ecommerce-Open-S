import searchWhiteIcon from "../assets/images/icons/search-ios-white.png";

const SearchComponent = () => {
  return (
    <div className="div-milieu  flex justify-center items-center">
      <form className="flex flex-col md:flex-row gap-3 w-full">
        <div className="form-search flex  w-full	">
          <input
            type="text"
            placeholder="Recherche un produit"
            className="w-full md:w-90 px-3 h-10 rounded-l border-2 border-orange-400  focus:outline-none focus:border-orange-500"
          />
          <button
            type="submit"
            className=" bg-orange-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
          >
            {" "}
            <img
              src={searchWhiteIcon}
              alt="Search Icon"
              style={{ width: "25px" }}
            />{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
