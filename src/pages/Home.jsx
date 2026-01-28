import useFetch from "../hooks/useFetch.js";
import { fetchProducts } from "../Services/ProductService";
import ProductCard from "../Components/Product/ProductCard";

const Home = () => {
  const { data: products, loading, error } = useFetch(fetchProducts);  // used destructuring to rename data -> products

  if (loading) { // While Products are loading
    return ( 
      <div className="text-center mt-10 text-lg">  
        Loading products...
      </div>
    );
  }

  if (error) {
    return (       
      <div className="text-center mt-10 text-red-500">   
        {error}
      </div>
    );
  }

  return (
<div className="max-w-7xl mx-auto px-4 py-6">
  <h1 className="text-2xl font-semibold mb-6">
    Products
  </h1>

  

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product) => ( // Data Productcard ko dena
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>
  );
};

export default Home;
