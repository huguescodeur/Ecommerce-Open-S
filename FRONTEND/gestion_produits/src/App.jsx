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

  console.log(`Les Infos du User: ${userInfo}`);
  return (
    <div>
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ userInfo, loading, setUserInfo }}>
          <SidebarProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/connexion" element={<Connexion />} />
                <Route path="/inscription" element={<Inscription />} />
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
                <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
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
