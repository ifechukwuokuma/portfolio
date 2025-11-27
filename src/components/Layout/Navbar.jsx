import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Circle, MessageCircle } from "lucide-react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "https://ifechukwuokuma.substack.com", label: "Blog", target: "_blank" },
    { to: "https://github.com/ifechukwuokuma", label: "GitHub", target: "_blank" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white py-3 sm:py-4">
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 text-black relative">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="bg-[#F9B233] p-1 rounded-full">
            <Circle size={18} fill="#fff" color="#fff" />
          </div>
          <NavLink to="/" className="text-2xl font-bold">
            Ifechukwu Okuma.
          </NavLink>
        </div>

        {/* Desktop Menu - only for large screens */}
        <ul className="hidden lg:flex gap-8 items-center font-medium">
          {navLinks.map(({ to, label, target }) => (
            <li key={to}>
              <NavLink
                to={to}
                target={target}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-[#F9B233]" : "text-black hover:text-[#F9B233]"}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop WhatsApp button */}
        <a
          href="https://wa.me/2348024233790?text=Hi%20Ifechukwu..."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center bg-black text-white font-semibold px-5 py-2 rounded-full hover:bg-[#F9B233] hover:text-white transition text-base"
        >
          <MessageCircle className="mr-2" size={18} />
          WhatsApp
        </a>

        {/* Mobile/Laptop Toggle */}
        <div className="flex lg:hidden items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Slide-out Menu for Mobile & Laptop */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black text-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-40`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-5">
          <button onClick={() => setMenuOpen(false)} className="text-white focus:outline-none">
            <X size={28} />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col items-center justify-center h-[80%] gap-6">
          <ul className="flex flex-col items-center gap-6 text-lg">
            {navLinks.map(({ to, label, target }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  target={target}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "text-[#F9B233]" : "text-white hover:text-[#F9B233]"}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/2348024233790?text=Hi%20Ifechukwu..."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white text-[#203B2E] font-semibold px-5 py-2 rounded-full hover:bg-[#F9B233] hover:text-white transition text-base"
          >
            <MessageCircle className="mr-2" size={18} />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};
