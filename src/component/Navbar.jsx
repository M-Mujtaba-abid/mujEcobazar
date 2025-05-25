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
    { name: "Home", link: "/" },
    { name: "", link: "" },
    { name: "Blog", link: "/blog" },
    { name: "AboutUs", link: "/aboutUs" },
    { name: "ContactUs", link: "/contactUs" },
  ];

  return (
    <div className="w-full">
      <nav className="bg-black text-white shadow-sm">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
          {/* Logo or Brand */}
          <Link to="/" className="text-xl font-bold ml-10">My-Mart</Link>

          {/* Hamburger for Mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            {NavArray.map((item, index) => (
              <li key={index}>
                <Link to={item.link} className="hover:text-green-500">{item.name}</Link>
              </li>
            ))}
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="flex flex-col space-y-3">
              {NavArray.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="block hover:text-green-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
