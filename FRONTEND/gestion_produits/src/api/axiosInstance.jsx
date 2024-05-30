import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/", // Assurez-vous que cette URL correspond à votre backend Django
  withCredentials: true, // Permet à Axios d'envoyer des cookies avec les requêtes
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Ajoutez le jeton CSRF du cookie dans les en-têtes de la requête
    const csrftoken = getCookie("csrftoken"); // Vous devez définir la fonction getCookie pour récupérer le jeton CSRF à partir du cookie
    if (csrftoken) {
      config.headers["X-CSRFToken"] = csrftoken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Fonction pour récupérer le jeton CSRF à partir du cookie
function getCookie(name) {
  const cookieValue = document.cookie.match(
    "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
  );
  return cookieValue ? cookieValue.pop() : "";
}

export default axiosInstance;
