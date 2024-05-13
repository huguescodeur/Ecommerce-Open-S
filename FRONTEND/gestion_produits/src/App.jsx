import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./assets/styles/index.css";
import Home from "./pages/menu/Home/Home";
import About from "./pages/menu/About/About";
import Contact from "./pages/menu/Contact/Contact";
import "./assets/styles/index.css";
import Inscription from "./account/pages/Inscription";
import Connexion from "./account/pages/Connexion";

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

  const [username, setUsername] = useState("Hugues");
  return (
    <div>
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ username, setUsername }}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Connexion" element={<Connexion />} />
              <Route path="/inscription" element={<Inscription />} />

              <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
