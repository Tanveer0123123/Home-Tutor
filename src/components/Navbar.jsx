import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Student", path: "/student" },
    { name: " Become Tutor", path: "/become-tutor" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-slate-900">
            HomeTutor Bhopal
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive
                      ? "text-sky-500"
                      : "text-gray-600 hover:text-slate-900"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="bg-sky-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-sky-600 transition"
            >
              Free Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-900"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b">
          <span className="text-lg font-bold text-slate-900">
            HomeTutor Bhopal
          </span>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-base font-medium ${
                  isActive
                    ? "text-sky-500"
                    : "text-gray-700 hover:text-slate-900"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* CTA */}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-sky-500 text-white py-2 rounded-md font-medium hover:bg-sky-600 transition"
          >
            Free Demo 
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
