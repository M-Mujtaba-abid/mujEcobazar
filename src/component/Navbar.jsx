// import { useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const toggleDropdown = (index) => {
//     setOpenDropdown(openDropdown === index ? null : index);
//   };
//   const NavArray = [
//     { name: "home", link: "/" },
//     { name: "shop", link: "/shop" },
//     { name: "pages", link: "/pages" },
//     { name: "blogs", link: "/blogs" },
//     { name: "aboutUs", link: "/aboutUs" },
//     { name: "contactUs", link: "/contactUs" },
//   ];
//   return (
//     // <div className="h-full w-full">
//     //   <nav className="bg-black border-gray-200 ps-8 text-white dark:border-gray-700 shadow-sm">
//     //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//     //       {/* Mobile Menu Button */}
//     //       <button
//     //         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//     //         type="button"
//     //         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
//     //         aria-controls="navbar-dropdown"
//     //         aria-expanded={isMobileMenuOpen}
//     //       >
//     //         <span className="sr-only">Open main menu</span>
//     //         <svg
//     //           className="w-5 h-5"
//     //           aria-hidden="true"
//     //           xmlns="http://www.w3.org/2000/svg"
//     //           fill="none"
//     //           viewBox="0 0 17 14"
//     //         >
//     //           <path
//     //             stroke="currentColor"
//     //             strokeLinecap="round"
//     //             strokeLinejoin="round"
//     //             strokeWidth={2}
//     //             d="M1 1h15M1 7h15M1 13h15"
//     //           />
//     //         </svg>
//     //       </button>
//     //       {/* Menu */}
//     //       <div
//     //         className={`${
//     //           isMobileMenuOpen ? "block" : "hidden"
//     //         } w-full md:block md:w-auto`}
//     //         id="navbar-dropdown"
//     //       >
//     //         <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:space-x-8 md:flex-row md:mt-0 md:border-0">
//     //           {/* Dropdowns */}
//     //           {["Home", "Shop", "Pages", "Blog"].map((dropdown, index) => (
//     //             <li key={index} className="relative">
//     //               <button
//     //                 onClick={() => toggleDropdown(index + 1)}
//     //                 className="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0"
//     //               >
//     //                 {dropdown}
//     //                 <svg
//     //                   className="w-2.5 h-2.5 ms-2.5"
//     //                   aria-hidden="true"
//     //                   xmlns="http://www.w3.org/2000/svg"
//     //                   fill="none"
//     //                   viewBox="0 0 10 6"
//     //                 >
//     //                   <path
//     //                     stroke="currentColor"
//     //                     strokeLinecap="round"
//     //                     strokeLinejoin="round"
//     //                     strokeWidth={2}
//     //                     d="m1 1 4 4 4-4"
//     //                   />
//     //                 </svg>
//     //               </button>
//     //               {openDropdown === index + 1 && (
//     //                 <div className="absolute z-10 mt-2 bg-gray-900 rounded-lg shadow-lg w-44">
//     //                   <ul className="py-2 text-sm text-white">
//     //                     <li>
//     //                       <a
//     //                         href="#"
//     //                         className="block px-4 py-2 hover:bg-gray-700"
//     //                       >
//     //                         Option 1
//     //                       </a>
//     //                     </li>
//     //                     <li>
//     //                       <a
//     //                         href="#"
//     //                         className="block px-4 py-2 hover:bg-gray-700"
//     //                       >
//     //                         Option 2
//     //                       </a>
//     //                     </li>
//     //                   </ul>
//     //                 </div>
//     //               )}
//     //             </li>
//     //           ))}
//     //           {/* Links */}
//     //           <li>
//     //             <Link
//     //               to=""
//     //               className="block px-4  text-white hover:text-green-500"
//     //             >
//     //               About Us
//     //             </Link>
//     //           </li>
//     //           <li>
//     //             <Link
//     //               to="/ContactUs"
//     //               className="block px-4  text-white hover:text-green-500"
//     //             >
//     //               Contact Us
//     //             </Link>
//     //           </li>
//     //         </ul>
//     //       </div>
//     //     </div>
//     //   </nav>
//     // </div>
//     // 
//   );
// }

// export default Navbar;
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const NavArray = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "Pages", link: "/pages" },
    { name: "Blogs", link: "/blogs" },
    { name: "AboutUs", link: "/aboutUs" },
    { name: "ContactUs", link: "/contactUs" },
  ];

  return (
    <div className="h-full w-full "
    // onClick={hy}
    >
      <nav className="bg-black  px-8 text-white dark:border-gray-700 shadow-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded={isMobileMenuOpen}
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

          {/* Menu */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg bg-black md:space-x-8 md:flex-row md:mt-0 md:border-0">
              {NavArray.map((item, index) => (
                <li key={index} className="relative">
                  {["Home","Shop", "Pages", "Blogs"].includes(item.name) ? (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0"
                    >
                      {item.name}
                      <svg
                        className="w-2.5 h-2.5 ml-2"
                        aria-hidden="true"
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
                      className="block px-4 p- text-white hover:text-green-500"
                    >
                      {item.name}
                    </Link>
                  )}
                  {openDropdown === index && (
                    <div className="absolute z-10 mt-2 bg-gray-900 rounded-lg shadow-lg w-44">
                      <ul className="py-2 text-sm text-white">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-700"
                          >
                            Option 1
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-700"
                          >
                            Option 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
