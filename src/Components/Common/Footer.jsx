
const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600">
        
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            ShopEase
          </h3>
          <p className="mt-2 text-gray-500">
            A modern e-commerce frontend built with React.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">
            Quick Links
          </h4>
          <ul className="space-y-1">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Cart</li>
            <li className="hover:text-black cursor-pointer">Products</li>
          </ul>
        </div>

        {/* Tech */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">
            Tech Stack
          </h4>
          <ul className="space-y-1">
            <li>React</li>
            <li>Vite</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">
            Developer
          </h4>
          <p className="text-gray-500">
            Built for frontend internship practice.
          </p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
