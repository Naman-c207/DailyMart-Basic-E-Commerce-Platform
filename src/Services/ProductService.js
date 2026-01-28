const BASE_URL = "https://dummyjson.com/products";

export const fetchProducts = async () => {

  // async create a function asynchronous means it returns a promise everytime
  const response = await fetch(BASE_URL);

  if (!response.ok) {

    throw new Error("Failed to fetch products");
  }

  const data = await response.json();
  
  return data.products; 
};
