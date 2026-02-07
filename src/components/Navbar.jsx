import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../assets/Tutor-bhaiya-logo.png";

/* ================= DROPDOWN DATA ================= */

const dropdownData = {
 Services: [
  { label: "Class LKG to UKG", path: "/services#home-tuition" },
  { label: "Class 1st to 5th", path: "/services#home-tuition" },
  { label: "Class 6th to 8th", path: "/services#home-tuition" },
  { label: "Class 9th to 10th", path: "/services#home-tuition" },
  { label: "Class 11th to 12th", path: "/services#home-tuition" },
  { label: "Spoken English", path: "/services#one-to-one" },
  { label: "Online Classes", path: "/services#one-to-one" },
],


  "About Us": [
    { label: "Why Tutor Bhaiya", path: "/about-us#why-us" },
    { label: "Our Mission", path: "/about-us#mission" },
    { label: "How We Work", path: "/about-us#how-we-work" },
  ],

  Student: [
    { label: "Student Registration", path: "/student#register" },
    { label: "How It Works", path: "/student#how-it-works" },
    { label: "Book Free Demo", path: "/contact" },
  ],

  "Become Tutor": [
    { label: "Why Become Tutor", path: "/become-tutor#why" },
    { label: "Tutor Registration", path: "/become-tutor#register" },
    { label: "Tutor Benefits", path: "/become-tutor#benefits" },
  ],
};

/* ================= NAVBAR ================= */

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Student", path: "/student" },
    { name: "Become Tutor", path: "/become-tutor" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <img
              src={Logo}
              alt="Tutor Bhaiya Logo"
              className="h-18 md:h-19 w-auto object-contain"
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const hasDropdown = dropdownData[link.name];

              if (!hasDropdown) {
                return (
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
                );
              }

              return (
                <div key={link.name} className="relative group">
                  <NavLink
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

                  {/* HOVER BRIDGE (important fix) */}
                  <div className="absolute left-0 top-full h-4 w-full"></div>

                  {/* Dropdown */}
                  <div className="absolute left-0 top-full mt-4 w-72 rounded-xl bg-white border shadow-xl
                                  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                    {dropdownData[link.name].map((item, i) => (
                      <Link
                        key={i}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Contact */}
            <Link
              to="/contact"
              className="bg-sky-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-sky-600 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            className="md:hidden text-slate-900"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b">
          <span className="text-lg font-bold text-slate-900">
            Tutor Bhaiya
          </span>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <div className="px-4 py-6 space-y-3">

          {navLinks.map((link) => {
            const hasDropdown = dropdownData[link.name];

            if (!hasDropdown) {
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-gray-700"
                >
                  {link.name}
                </NavLink>
              );
            }

            return (
              <div key={link.name}>
                <button
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === link.name ? null : link.name
                    )
                  }
                  className="flex w-full items-center justify-between text-base font-medium text-gray-700"
                >
                  {link.name}
                  <ChevronDown
                    size={18}
                    className={`transition ${
                      mobileDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileDropdown === link.name && (
                  <div className="ml-4 mt-2 space-y-2">
                    {dropdownData[link.name].map((item, i) => (
                      <Link
                        key={i}
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className="block text-sm text-gray-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Mobile CTA */}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center bg-sky-500 text-white py-2 rounded-md font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
