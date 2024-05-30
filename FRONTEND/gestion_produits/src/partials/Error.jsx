import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error footer-collant">
      <div className="bg-gray-100">
        <div className="h-screen flex flex-col justify-center items-center">
          <h1 className="text-8xl font-bold text-gray-800">404</h1>
          <p className="text-4xl font-medium text-gray-800">Page Not Found</p>
          <Link to="/" className="mt-4 text-xl text-orange-500 hover:underline">
            Retour page d'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
