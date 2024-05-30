import { SidebarProvider } from "./partials/SidebarContext";
import { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./assets/styles/index.css";
import Home from "./pages/menu/Home/Home";
import About from "./pages/menu/About/About";
import Contact from "./pages/menu/Contact/Contact";
import "./assets/styles/index.css";
import Inscription from "./account/pages/Inscription";
import Connexion from "./account/pages/Connexion";
import { getUserInfo } from "./api/account/auth_api";
import ProtectedRoute from "./ProtectedRoute";
import Paiement from "./pages/produits/paiement/Paiement";
import Pannier from "./pages/produits/paiement/Panier";
import Error from "./partials/Error";
import Product from "./pages/produits/paiement/Product";
// import Search from "./components/Search";
import SearchProduct from "./pages/produits/paiement/SearchProduct";
import { getProducts, getCategories } from "./api/product/produits_api";

export const AppContext = createContext();

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        // refetchOnMountOrRefetch: false,
        // refetchOnReconnect: true,
        staleTime: 1000 * 60 * 10, // 10 minutes
      },
    },
  });

  // const [username, setUsername] = useState("Hugues");
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const info = await getUserInfo();
      setUserInfo(info);
      setLoading(false);
    };

    fetchUserInfo();
  }, []);


  const [produits, setProduits] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProduits = async () => {
      const fetchedProducts = await getProducts();
      if (fetchedProducts) {
        setProduits(fetchedProducts);
      }
    };

    fetchProduits();
  }, []);


  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getCategories();
      if (fetchedCategories) {
        setCategories(fetchedCategories);
      }
    };

    fetchCategories();
  }, []);

  console.log(`Les Infos du User: ${userInfo}`);
  
  return (
    <div>
      <QueryClientProvider client={client}>
        <AppContext.Provider
          value={{
            userInfo,
            loading,
            setUserInfo,
            produits,
            setProduits,
            categories,
            setCategories,
          }}
        >
          <SidebarProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/connexion" element={<Connexion />} />
                <Route path="/inscription" element={<Inscription />} />
                {/* <Route path="/search" element={<Search />} /> */}
                <Route path="/search" element={<SearchProduct />} />
                <Route path="/paiement" element={<Paiement />} />
                <Route path="/panier" element={<Pannier />} />
                <Route path="/produitdetails" element={<Product />} />

                <Route
                  path="/contact"
                  element={
                    loading ? (
                      <div>Loading...</div>
                    ) : (
                      <ProtectedRoute path="/contact" element={<Contact />} />
                    )
                  }
                />
                <Route path="*" element={<Error />} />
              </Routes>
            </Router>
          </SidebarProvider>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

// value={{ username, setUsername }}

export default App;
