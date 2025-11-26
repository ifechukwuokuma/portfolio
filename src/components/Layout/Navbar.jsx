import {useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Circle, MessageCircle } from "lucide-react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "https://ifechukwuokuma.substack.com", label: "Blog", target: "_blank" },  // Substack link with _blank
    { to: "https://github.com/ifechukwuokuma", label: "GitHub", target: "_blank" },  // GitHub link with _blank
  ];

  return (
    <header className="sticky top-0 z-50 bg-white py-3 sm:py-4">
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 text-black relative">
        {/* ===== Logo ===== */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="bg-[#F9B233] p-1 rounded-full">
            <Circle size={18} fill="#fff" color="#fff" />
          </div>
          <NavLink to="/" className="text-2xl font-bold">
            Ifechukwu Okuma.
          </NavLink>
        </div>

        {/* ===== Desktop/Tablet Menu ===== */}
        <ul className="hidden md:flex gap-5 lg:gap-8 items-center font-medium">
          {navLinks.map(({ to, label, target }) => (
            <li key={to}>
              <NavLink
                to={to}
                target={target} // Set target for external links
                className={({ isActive }) =>
                  `nav-link ${
                    isActive
                      ? "text-[#F9B233]"
                      : "text-black hover:text-[#F9B233]"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ===== Desktop WhatsApp Button ===== */}
        <a
          href="https://wa.me/2348024233790?text=Hi%20Ifechukwu%2C%20I'm%20coming%20from%20your%20website.%20I%20want%20to%20book%20a%20call%20to%20discuss%20a%20project%20in%20mind."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center bg-black text-white font-semibold px-4 py-2 lg:px-5 lg:py-2.5 rounded-full hover:bg-[#F9B233] hover:text-white transition text-sm lg:text-base"
        >
          <MessageCircle className="mr-2" size={18} />
          WhatsApp
        </a>

        {/* ===== Mobile Toggle ===== */}
        <div className="flex items-center gap-3 md:hidden z-30">
          {!menuOpen && (
            <button className="text-black" onClick={() => setMenuOpen(true)}>
              <Menu size={28} />
            </button>
          )}
        </div>
      </nav>

      {/* ===== Mobile Slide Menu ===== */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black text-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-40`}
      >
        {/* ===== Close Icon ===== */}
        <div className="flex justify-end p-5">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white focus:outline-none"
          >
            <X size={28} />
          </button>
        </div>

        {/* ===== Menu Content ===== */}
        <div className="flex flex-col items-center justify-center h-[80%] gap-6">
          <ul className="flex flex-col items-center gap-4 text-base sm:text-lg">
            {navLinks.map(({ to, label, target }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  target={target} // Set target for external links
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive
                        ? "text-[#F9B233]"
                        : "text-white hover:text-[#F9B233]"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/2348024233790?text=Hi%20Ifechukwu%2C%20I'm%20coming%20from%20your%20website.%20I%20want%20to%20book%20a%20call%20to%20discuss%20a%20project%20in%20mind."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white text-[#203B2E] font-semibold px-5 py-2 rounded-full hover:bg-[#F9B233] hover:text-white transition text-sm sm:text-base"
          >
            <MessageCircle className="mr-2" size={18} />
            WhatsApp
          </a>
        </div>
      </div>

      {/* ===== Overlay (click to close) ===== */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};
