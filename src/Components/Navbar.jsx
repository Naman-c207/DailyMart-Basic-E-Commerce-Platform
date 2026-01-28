import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Navbar = () => {

  const { cartItems } = useCart();

  return (
    
    <nav className="sticky top-0 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          DailyMart
        </Link>

        {/* Search Placeholder */}
        <div className="flex-1 max-w-md hidden sm:block">
          <input
            type="text"
            placeholder="Search products, categories and more.."
            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Links */}
        <div className="flex items-center gap-8">
          <Link to="/"
            className="text-base text-gray-600 hover:text-black font-bold"
          >
            Home
          </Link>

          <Link to="/cart"
            className="relative text-base text-gray-600 hover:text-black font-bold"
          >
            Cart
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-black text-white text-xs px-1.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
