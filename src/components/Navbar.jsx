import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-slate-900">
          HomeTutor Bhopal
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-600 hover:text-slate-900">Home</Link>
          <Link to="/subjects" className="text-gray-600 hover:text-slate-900">Subjects</Link>
          <Link to="/home-tuition" className="text-gray-600 hover:text-slate-900">Home Tuition</Link>
          <Link to="/become-tutor" className="text-gray-600 hover:text-slate-900">Become Tutor</Link>
          <Link to="/contact">
            <button className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600">
              Free Demo
            </button>
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
