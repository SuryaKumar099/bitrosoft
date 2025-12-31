// import React, { useState } from "react";
// import { IoChevronDown } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import Button from "./Ui/Button";

// function Nav() {
//   const [activeId, setActiveId] = useState(null);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow border-b px-6 py-3 flex items-center justify-between">

//       {/* LOGO */}
//       <Link to="/" className="flex items-center gap-2">
//         <img
//           src="https://tse4.mm.bing.net/th/id/OIP.6wVp5KL9e0KmSlP2mvieWwHaF7"
//           alt="logo"
//           className="h-14 w-14"
//         />
//         <span className="text-xl font-semibold">BITROSOFT</span>
//       </Link>

//       {/* MENU */}
//       <ul className="flex items-center gap-8 font-semibold">

//         {/* HOME */}
//         <li>
//           <Link to="/" className="hover:text-blue-600 text-gray-600">
//             Home
//           </Link>
//         </li>

//         {/* ABOUT */}
//         <li>
//           <Link to="/about" className="hover:text-blue-600 text-gray-600">
//             About us
//           </Link>
//         </li>

//         {/* SERVICE DROPDOWN */}
//         <li
//           className="relative cursor-pointer"
//           onMouseEnter={() => setActiveId("service")}
//           onMouseLeave={() => setActiveId(null)}
//         >
//           <div className="flex items-center gap-1 hover:text-blue-600">
//             Service <IoChevronDown />
//           </div>

//           {activeId === "service" && (
//             <div className="absolute top-full left-0 w-72 bg-white shadow-lg border rounded-lg p-4 hover:text-blue-600">
//               <ul className="space-y-3">
//                 <Link to="/service/mobile-development" className="block hover:text-blue-600 text-gray-600">
//                   Mobile Development
//                 </Link>
//                 <Link to="/service/web-development" className="block hover:text-blue-600 text-gray-600">
//                   Web Development
//                 </Link>
//                 <Link to="/service/cloud-computing" className="block hover:text-blue-600 text-gray-600">
//                   Cloud Computing
//                 </Link>
//                 <Link to="/service/staff-augmentation" className="block hover:text-blue-600 text-gray-600">
//                   Staff Augmentation
//                 </Link>
//               </ul>
//             </div>
//           )}
//         </li>

//         {/* CAREER DROPDOWN */}
//         <li
//           className="relative cursor-pointer"
//           onMouseEnter={() => setActiveId("career")}
//           onMouseLeave={() => setActiveId(null)}
//         >
//           <div className="flex items-center gap-1 hover:text-blue-600">
//             Career <IoChevronDown />
//           </div>

//           {activeId === "career" && (
//             <div className="absolute top-full left-0 w-64 bg-white shadow-lg border rounded-lg p-4">
//               <ul className="space-y-3">
//                 <Link to="/career/openings" className="block hover:text-blue-600 text-gray-600">
//                   Current Openings
//                 </Link>
//                 <Link to="/career/internship" className="block hover:text-blue-600 text-gray-600">
//                   Internship
//                 </Link>
//                 <Link to="/career/life-at-company" className="block hover:text-blue-600 text-gray-600">
//                   Life at Company
//                 </Link>
//               </ul>
//             </div>
//           )}
//         </li>

//         {/* CONTACT */}
//         <li>
//           <Link to="/contact" className="hover:text-blue-600 text-gray-600">
//             Contact us
//           </Link>
//         </li>

//         {/* CLIENTS */}
//         <li>
//           <Link to="/clients" className="hover:text-blue-600 text-gray-600">
//             Clients
//           </Link>
//         </li>

//       </ul>

//       {/* ACTION BUTTON */}
//       {/* <Button className="px-4 py-1">
//         Login
//       </Button> */}
//       {/* Replace the existing login button in Nav.jsx */}
//       <Link to="/login">
//         <Button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//           Login
//         </Button>
//       </Link>

//     </nav>
//   );
// }

// export default Nav;


import React, { useState } from "react";
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "./Ui/Button";

function Nav() {
  const [activeId, setActiveId] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveId(null);
  };

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About us" },
    {
      label: "Service",
      submenu: [
        { to: "/service/mobile-development", label: "Mobile Development" },
        { to: "/service/web-development", label: "Web Development" },
        { to: "/service/cloud-computing", label: "Cloud Computing" },
        { to: "/service/staff-augmentation", label: "Staff Augmentation" }
      ]
    },
    {
      label: "Career",
      submenu: [
        { to: "/career/openings", label: "Current Openings" },
        { to: "/career/internship", label: "Internship" },
        { to: "/career/life-at-company", label: "Life at Company" }
      ]
    },
    { to: "/contact", label: "Contact us" },
    { to: "/clients", label: "Clients" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow border-b px-4 md:px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.6wVp5KL9e0KmSlP2mvieWwHaF7"
            alt="logo"
            className="h-10 w-10 md:h-14 md:w-14"
          />
          <span className="text-lg md:text-xl font-semibold">BITROSOFT</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8 font-semibold">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={item.submenu ? () => setActiveId(item.label.toLowerCase()) : undefined}
                onMouseLeave={item.submenu ? () => setActiveId(null) : undefined}
              >
                {item.to ? (
                  <Link to={item.to} className="hover:text-blue-600 text-gray-600">
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
                      {item.label} <IoChevronDown />
                    </div>

                    {activeId === item.label.toLowerCase() && item.submenu && (
                      <div className="absolute top-full left-0 w-64 bg-white shadow-lg border rounded-lg p-4">
                        <ul className="space-y-3">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.to}
                                className="block hover:text-blue-600 text-gray-600 hover:bg-gray-50 p-2 rounded"
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* Login Button */}
          <Link to="/login">
            <Button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-2xl text-gray-700 hover:text-blue-600"
        >
          {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      onClick={closeMobileMenu}
                      className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <div
                        className="flex items-center justify-between py-2 text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
                        onClick={() => setActiveId(
                          activeId === item.label.toLowerCase() ? null : item.label.toLowerCase()
                        )}
                      >
                        {item.label}
                        <IoChevronDown
                          className={`transition-transform ${activeId === item.label.toLowerCase() ? 'rotate-180' : ''
                            }`}
                        />
                      </div>

                      {activeId === item.label.toLowerCase() && item.submenu && (
                        <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.to}
                              onClick={closeMobileMenu}
                              className="block py-2 text-gray-600 hover:text-blue-600"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </li>
              ))}

              {/* Mobile Login Button */}
              <li className="pt-4">
                <Link to="/login" onClick={closeMobileMenu}>
                  <Button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                    Login
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;