import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";
import {Link, NavLink } from "react-router-dom";
import Logo from "../assets/Tutor-bhaiya-logo3.png"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* COMPANY INFO */}
          <div>
            <Link to="/" className="text-xl font-bold text-slate-900">
            <div>
              <img
                src={Logo}
                alt="Tutor bhaiya logo"
                className="h-18 md:h-24 w-auto object-contain"
              />
            </div>
            </Link>


            <p className="text-md leading-relaxed">
              Tutor Bhaiya provides trusted and personalised 1-to-1 home
              tuition with verified tutors to help students learn better and
              grow with confidence.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <span
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 hover:bg-sky-500 hover:border-sky-500 transition cursor-pointer"
                >
                  <Icon size={18} />
                </span>
              ))}
            </div>

            {/* HELP */}
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-500 flex items-center justify-center rounded-full text-white">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-sm">Need Help?</p>
                <p className="text-white font-semibold">+91 7697746196</p>
              </div>
            </div>
          </div>

          {/* OUR SERVICES */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-md">
              {[
                "Home Tuition (Class 1–12)",
                "CBSE & MP Board Support",
                "One-to-One Tuition",
                "Free Demo Class",
                "Local Area Tutors",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-sky-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2 text-md">
              {[
                { name: "Home", to: "/" },
                { name: "About Us", to: "/about" },
                { name: "Our Services", to: "/services" },
                { name: "Students", to: "/student" },
                { name: "Our Tutors", to: "/become-tutor" },
                { name: "Contact Us", to: "/contact" },
              ].map((link, i) => (
                <li key={i} className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-sky-500" />
                  <NavLink
                    to={link.to}
                    className="hover:text-sky-400 transition"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT US */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>

            <div className="flex gap-3 text-md mb-3">
              <MapPin size={18} className="text-sky-500 mt-1" />
              <p>158 New Shiv Nagar, Anand Nagar, Bhopal (M.P.)</p>
            </div>

            <div className="flex gap-3 text-md mb-3">
              <Phone size={18} className="text-sky-500" />
              <p>+91 7697746196</p>
            </div>

            <div className="flex gap-3 text-md">
              <Mail size={18} className="text-sky-500" />
              <p>info@hometutorbhopal.com</p>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 py-4 text-center text-md">
        © {new Date().getFullYear()} Tutor Bhaiya. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
