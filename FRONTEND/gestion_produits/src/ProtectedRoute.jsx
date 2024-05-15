import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./App";
// import { Route } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ element }) => {
  const { userInfo } = useContext(AppContext);
  const location = useLocation();
  // const history = useHistory();

  return userInfo ? (
    element
  ) : (
    <Navigate to="/connexion" state={{ from: location }} replace />
  );
};

ProtectedRoute.propTypes = {
  //   path: PropTypes.string.isRequired,
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
