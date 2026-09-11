import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Skills", path: "/skills" },
    { label: "Experience", path: "/experience" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-lg font-bold tracking-tight text-white"
        >
          SHIVANI<span className="text-violet-400">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
          >
            Let's Talk
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-300 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-zinc-900 bg-black md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="border-b border-zinc-900 py-4 text-sm text-zinc-300 transition hover:text-white"
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-zinc-950"
            >
              Let's Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;