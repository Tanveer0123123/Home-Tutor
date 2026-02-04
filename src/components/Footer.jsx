const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-lg font-semibold text-white">HomeTutor Bhopal</h3>
          <p className="mt-2 text-sm">
            Trusted home tuition service in Bhopal for school students.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Home</li>
            <li>Subjects</li>
            <li>Home Tuition</li>
            <li>Become Tutor</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold">Contact</h4>
          <p className="mt-2 text-sm">
            📞 +91 XXXXXXXXXX <br />
            📍 Bhopal, Madhya Pradesh
          </p>
        </div>

      </div>

      <div className="text-center text-sm border-t border-slate-700 py-4">
        © 2026 HomeTutor Bhopal. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
