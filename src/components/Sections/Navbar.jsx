import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon, Mail } from "lucide-react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/insights", label: "Insights" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#0a0a0a] border-b border-gray-100 dark:border-gray-800 py-3 sm:py-4">
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-2">

        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold tracking-tight text-black dark:text-white">
          IO<span className="text-[#F9B233]">.</span>
        </NavLink>

        {/* Desktop Center Links */}
        <ul className="hidden lg:flex gap-8 items-center font-medium">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `text-sm transition ${isActive ? "text-[#F9B233]" : "text-gray-600 dark:text-gray-300 hover:text-[#F9B233] dark:hover:text-[#F9B233]"}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right: Email + Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Email CTA - fixed circle, tooltip on hover */}
          <div className="relative flex items-center">
            <a
              href="mailto:ifechukwuokuma@gmail.com"
              className="group flex items-center justify-center w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-[#F9B233] hover:text-white transition"
            >
              <Mail size={16} />
              <span className="absolute right-12 bg-black dark:bg-white text-white dark:text-black text-xs font-medium px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-200 pointer-events-none">
                ifechukwuokuma@gmail.com
              </span>
            </a>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-200 dark:border-gray-700 hover:border-[#F9B233] transition text-black dark:text-white"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Right: Toggle + Hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-200 dark:border-gray-700 hover:border-[#F9B233] transition text-black dark:text-white"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu" className="text-black dark:text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black text-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-40`}
      >
        <div className="flex justify-end p-5">
          <button onClick={() => setMenuOpen(false)} className="text-white">
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[80%] gap-6">
          <ul className="flex flex-col items-center gap-6 text-lg">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `${isActive ? "text-[#F9B233]" : "text-white hover:text-[#F9B233]"} transition`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <a
            href="mailto:ifechukwuokuma@gmail.com"
            className="flex items-center gap-2 bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-[#F9B233] hover:text-white transition"
          >
            <Mail size={16} />
            ifechukwuokuma@gmail.com
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