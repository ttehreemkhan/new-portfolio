import React, { useState } from "react";
import CV from "../assets/Cv.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Tailwind Heroicons

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? "bg-white text-black" : "bg-gray-900 text-white";
  };

  const links = [
    { name: "Home", link: "#Home" },
    { name: "About", link: "#About" },
    { name: "Work", link: "#Work" },
    { name: "Contact", link: "#Contact" },
  ];

  return (
    <nav className={`fixed  top-0 w-full z-50 transition-colors duration-500  ${darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black "}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        <h1 className="text-2xl font-semibold">My Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-lg cursor-pointer">
          {links.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="relative transition-colors duration-300 hover:text-blue-600
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            </li>
          ))}

          <li>
            <a
              href={CV}
              download
              className="relative transition-colors duration-300 hover:text-blue-600
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Download CV
            </a>
          </li>

          <li>
            <button
              onClick={toggleTheme}
              className="px-4 py-1 border rounded hover:bg-gray-700 hover:text-white transition-colors duration-300"
            >
              {darkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden ">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <XMarkIcon className="w-6 h-6 "/> : <Bars3Icon className="w-8 h-8"/>}
          </button>
        </div>
      </div>

     {/* Mobile Slide-In Menu */}
<div
  className={`fixed top-0 right-0 h-full w-3/4 bg-green-300 text-black shadow-lg z-40 transform transition-transform duration-300 md:hidden ${
    menuOpen ? "translate-x-0" : "translate-x-full corser-pointer"
  }`}
>
  <ul className="flex flex-col gap-4 p-6 mt-16 text-xl">
    {/* Close button inside menu */}
    <div className="flex justify-end mb-4">
      <button onClick={() => setMenuOpen(false)}>
        <XMarkIcon className="w-6 h-6" />
      </button>
    </div>

    {links.map((item) => (
      <li key={item.name}>
        <a
          href={item.link}
          className="relative transition-colors duration-300 hover:text-blue-600
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
          onClick={() => setMenuOpen(false)}
        >
          {item.name}
        </a>
      </li>
    ))}

    <li>
      <a
        href={CV}
        download
        className="block w-full text-left py-2 transition-colors duration-300 hover:text-blue-600 corser-pointer"
        onClick={() => setMenuOpen(false)}
      >
        Download CV
      </a>
    </li>

    <li>
      <button
        onClick={() => { toggleTheme(); setMenuOpen(false); }}
        className="px-4 py-1 border rounded hover:bg-gray-600 hover:text-white transition-colors duration-300 corser-pointer"
      >
        {darkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
      </button>
    </li>
  </ul>
</div>

    </nav>
  );
}

export default Navbar;
