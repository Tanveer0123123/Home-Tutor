
import { Link } from "react-router-dom";

const BecomeTutor = () => {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          Become Tutor
        </h1>
        <p className="mt-2 text-gray-300 text-sm">
          <Link to="/" className="hover:underline">Home</Link> / Become Tutor
        </p>
      </div>
    </section>

      {/* TUTOR INFO SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Join Us as a Home Tutor
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            HomeTutor Bhopal is always looking for passionate and qualified
            tutors who want to make a real difference in students’ lives.
            If you enjoy teaching and believe in personalised learning,
            we would love to work with you.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            As a home tutor, you will get flexible timings, students near
            your location, and full support from our team. We ensure a
            transparent and respectful teaching environment.
          </p>

          {/* BENEFITS */}
          <div className="mt-10 grid sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
            <div className="bg-slate-50 p-4 rounded-md">
              ✔ Flexible teaching hours
            </div>
            <div className="bg-slate-50 p-4 rounded-md">
              ✔ Students near your area
            </div>
            <div className="bg-slate-50 p-4 rounded-md">
              ✔ Fair and timely payment
            </div>
            <div className="bg-slate-50 p-4 rounded-md">
              ✔ Professional support team
            </div>
          </div>

          {/* APPLY BUTTON */}
          <div className="mt-12">
            <a
              href="https://forms.gle/your-tutor-application-form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-sky-500 px-10 py-4 text-white text-lg font-medium hover:bg-sky-600 transition"
            >
              Apply Now
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default BecomeTutor;
