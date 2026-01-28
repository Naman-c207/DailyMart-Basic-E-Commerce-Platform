import { useCart } from "../../Context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // hook INSIDE component

  return (
<div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">

  <img
    src={product.thumbnail}
    alt={product.title}
    className="h-44 w-full object-cover"
  />

  <div className="p-4 flex flex-col gap-2">
    
    <h3 className="font-semibold text-sm line-clamp-1">
      {product.title}
    </h3>

    <p className="text-xs text-gray-500 line-clamp-2">
      {product.description}
    </p>

    <div className="mt-auto flex justify-between items-center">
      <span className="font-bold text-sm">$ {product.price}</span>
      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white text-xs px-3 py-1.5 rounded-md hover:bg-gray-800 cursor-pointer"
      >
        Add
      </button>
    </div>
  </div>
</div>
  );
};

export default ProductCard;
