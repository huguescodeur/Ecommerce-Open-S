export const getProducts = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/listproduits/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/listcategories/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

