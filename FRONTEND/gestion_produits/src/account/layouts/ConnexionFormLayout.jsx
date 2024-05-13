import { Link } from "react-router-dom";
import empty_cart from "../../assets/images/icons/empty_cart.png";

const ConnexionFormLayout = () => {
  return (
    <div className="mt-28 px-28 section-form">
      <section className="  text-slate-950 px-12 pt-30 border ">
        <div className="form-image  relative flex flex-col-reverse justify-around items-center mx-auto sm:py-12 lg:py-6 lg:flex-row lg:justify-between">
          <div className="div-form transition ease-in-out delay-150 hover:border-orange-500 w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  border  ">
            {/* shadow-lg */}
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-orange-500 md:text-2xl ">
                Connexion
              </h1>

              <form className="space-y-4 md:space-y-6" action="" method="post">
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className=" text-center bg-gray-50 border border-gray-300 focus:outline-none focus:ring-1 ring-offset-2 ring-orange-500 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5   placeholder-gray-400  "
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className=" text-center bg-gray-50 border border-gray-300 focus:outline-none focus:ring-1 ring-offset-2 ring-orange-500 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5   placeholder-gray-400  "
                    placeholder="password"
                    required=""
                  />
                </div>

                <div>
                  <input type="hidden" name="role" value="client" />
                </div>

                <div className="w-full pt-2 flex justify-center">
                  <button
                    type="submit"
                    className="w-1/2 bg-orange-500   text-white border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-primary-700 focus:ring-primary-800"
                  >
                    Connexion
                  </button>
                </div>
                <div className="w-full flex justify-center">
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Vous avez un compte?{" "}
                    <Link
                      to="/inscription"
                      className="font-medium text-orange-500  "
                    >
                      Inscrivez-vous
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div
            id="div-img-form"
            className=" flex items-center justify-center mt-8 lg:mt-0 h-72  lg:h-96 "
          >
            <img
              src={empty_cart}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnexionFormLayout;
