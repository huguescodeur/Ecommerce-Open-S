// import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import rightBag from "../../assets/images/icons/homme-femme-bag.png";
import { useState, useEffect } from "react";
import { register } from "../../api/account/auth_api";

const InscriptionFormLayout = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [inscriptionData, setInscriptionData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    role: "client",
  });
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    setInscriptionData({ ...inscriptionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setError("");

    await new Promise((resolve) => setTimeout(resolve, 0));

    // ? Validation Frontend
    if (
      !inscriptionData.username.trim() ||
      !inscriptionData.email.trim() ||
      !inscriptionData.password.trim() ||
      !inscriptionData.confirm_password.trim()
    ) {
      setError("Tous les champs sont obligatoires.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const usernameRegex = /^[a-zA-Z0-9.@+-]+$/;
    if (!emailRegex.test(inscriptionData.email)) {
      setError("Veuillez entrer un e-mail valide.");
      setLoading(false);
      return;
    }

    if (!usernameRegex.test(inscriptionData.username)) {
      setError(
        "Entrez! un nom d'utilisateur valide. Cette valeur peut contenir uniquement des lettres, des chiffres et des caractères  spéciaux: ., @, +, -, et _"
      );
      setLoading(false);
      return;
    }

    if (inscriptionData.password !== inscriptionData.confirm_password) {
      setError("Les mots de passe ne correspondent pas.");
      setLoading(false);
      return;
    }

    // ? Appel API
    const data = await register(
      inscriptionData.username,
      inscriptionData.email,
      inscriptionData.password,
      inscriptionData.confirm_password,
      inscriptionData.role
    );

    if (data instanceof Error) {
      setError(data.message);
      console.log(`Error: ${data}`);
    } else {
      try {
        if (inscriptionData.role === "client") {
          navigate("/connexion", { replace: true });
        } else if (inscriptionData.role === "vendeur") {
          navigate("/vendeur");
        } else if (inscriptionData.role === "admin") {
          navigate("/admin");
        }
      } catch (error) {
        console.log(error);
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    let timer;
    if (error) {
      setShowError(true);
      timer = setTimeout(() => {
        setShowError(false);
      }, 4000);
    }
    return () => clearTimeout(timer); // nettoyer le timer lors du démontage du composant
  }, [error]);

  return (
    <div className="mt-28 px-28 section-form">
      <section className="  text-slate-950 px-12 pt-30 border ">
        <div className="form-image  relative flex flex-col-reverse justify-around items-center mx-auto sm:py-12 lg:py-6 lg:flex-row lg:justify-between">
          <div className="div-form transition ease-in-out delay-150 hover:border-orange-500 w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  border  ">
            {/* shadow-lg */}
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-orange-500 md:text-2xl ">
                Inscription
              </h1>

              <form
                className="space-y-4 md:space-y-6"
                action=""
                method=""
                onSubmit={handleSubmit}
              >
                {showError && (
                  <p id="erreur-message" className="text-center text-red-500">
                    {error}
                  </p>
                )}

                <div>
                  <input
                    type="name"
                    name="username"
                    id="username"
                    onChange={handleChange}
                    className=" text-center bg-gray-50 border border-gray-300 focus:outline-none focus:ring-1 ring-offset-2 ring-orange-500 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5   placeholder-gray-400  "
                    placeholder="Name"
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
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
                    onChange={handleChange}
                    className=" text-center bg-gray-50 border border-gray-300 focus:outline-none focus:ring-1 ring-offset-2 ring-orange-500 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5   placeholder-gray-400  "
                    placeholder="password"
                    required=""
                  />
                </div>

                <div>
                  <input
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    onChange={handleChange}
                    placeholder="Confirmation"
                    className="text-center bg-gray-50 border border-gray-300 focus:outline-none focus:ring-1 ring-offset-2 ring-orange-500 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5   placeholder-gray-400  "
                    required=""
                  />
                </div>

                {/* <div>

                                    <input type="hidden" name="role" defaultValue="client" />
                                </div> */}

                <div className="w-full pt-2 flex justify-center">
                  <button
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    type="submit"
                    disabled={loading}
                    className="w-1/2 bg-orange-500   text-white border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-primary-700 focus:ring-orange-400"
                  >
                    {loading ? "Chargement..." : "Inscription"}
                  </button>
                </div>
                <div className="w-full flex justify-center">
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Vous avez un compte?{" "}
                    <Link
                      to="/connexion"
                      className="font-medium text-orange-500  "
                    >
                      Connectez-vous
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
              src={rightBag}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InscriptionFormLayout;
