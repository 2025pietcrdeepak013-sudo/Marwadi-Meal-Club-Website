import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Plans", link: "#plans" },
    { name: "Reviews", link: "#reviews" },
    { name: "Book", link: "#book" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Marwadi Meal Club"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
          />

          <div>
            <h1 className="text-base sm:text-xl font-bold text-green-700">
              Marwadi Meal Club
            </h1>

            <p className="text-[10px] sm:text-xs text-orange-500">
              Maa Jaisi Care, Har Meal Mein
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium">

          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="hover:text-orange-500 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}

        </ul>

        {/* Desktop Button */}
        <a
          href="#book"
          className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition"
        >
          Order Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-green-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t shadow-lg">

          <ul className="flex flex-col items-center gap-6 py-6">

            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-orange-500 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <a
              href="#book"
              onClick={() => setMenuOpen(false)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full"
            >
              Order Now
            </a>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;