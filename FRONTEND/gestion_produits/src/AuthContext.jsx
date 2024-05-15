// // AuthContext.js
// import { createContext, useState } from "react";
// import PropTypes from "prop-types";

// // Création du contexte d'authentification
// const AuthContext = createContext();

// // Provider d'authentification
// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export { AuthProvider, AuthContext };
