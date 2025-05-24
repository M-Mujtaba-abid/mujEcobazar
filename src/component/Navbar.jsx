
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/login");
  };

  const NavArray = [
    { name: "", link: "/shop" },
    { name: "Home", link: "/" },
    { name: "Pages", link: "/pages" },
    { name: "Blog", link: "/blog" },
    { name: "AboutUs", link: "/aboutUs" },
    { name: "ContactUs", link: "/contactUs" },
  ];

  return (
    <div className="h-full w-full">
     <nav className="bg-black px-8 text-white shadow-sm">
  <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
    
    {/* Left Side - Navigation Menu */}
    <div className="flex items-center space-x-8">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <ul className="hidden md:flex font-medium items-center space-x-6">
        {NavArray.map((item, index) => (
          <li key={index} className="relative">
            {["Home", "Pages", "Blogs"].includes(item.name) ? (
              <button
                onClick={() => toggleDropdown(index)}
                className="flex items-center text-white hover:text-green-500"
              >
                {item.name}
                <svg
                  className="w-2.5 h-2.5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            ) : (
              <Link
                to={item.link}
                className="text-white hover:text-green-500"
              >
                {item.name}
              </Link>
            )}

            {/* Dropdown */}
            {openDropdown === index && (
              <div className="absolute z-10 mt-2 bg-gray-900 rounded-lg shadow-lg w-44">
                <ul className="py-2 text-sm text-white">
                  <li>
                    <Link to="/cart" className="block px-4 py-2 hover:bg-gray-700">Cart</Link>
                  </li>
                  <li>
                    <Link to="/ViewMoreProduct" className="block px-4 py-2 hover:bg-gray-700">Shop</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>

    {/* Right Side - Logout Button */}
    <button
      onClick={handleLogout}
      className="black-red-600 hover:bg-red-700 hover:text-black border border-white hover:border-hidden text-white px-4 py-2 rounded-md"
    >
      Logout
    </button>
  </div>
</nav>

    </div>
  );
}

export default Navbar;
