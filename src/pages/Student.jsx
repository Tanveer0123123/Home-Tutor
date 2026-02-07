import { Link } from "react-router-dom";
import { UserCheck, BookOpenCheck, Home } from "lucide-react";


const Student = () => {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        {/* subtle glow */}

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Student
          </h1>
          <p className="mt-2 text-gray-300 text-sm">
            <Link to="/" className="hover:underline">Home</Link> / Student
          </p>
        </div>
      </section>

      {/* STUDENT INFO SECTION */}
      <section className="bg-gradient-to-br from-slate-200 via-sky-100 py-28">
        <div className="max-w-6xl mx-auto px-4">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Learning That Fits Every Student
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              At HomeTutor Bhopal, we focus on understanding each student’s strengths,
              weaknesses, and learning pace through personalised one-to-one home tuition.
            </p>
          </div>

          {/* Info Cards */}
          <div className="mt-20 grid gap-8 md:grid-cols-3">

            <div className="group rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-100 hover:shadow-xl transition">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition">
                <UserCheck size={26} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Personalised Learning
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Teaching plans are customised according to each student’s learning
                style, speed, and academic goals.
              </p>
            </div>

            <div className="group rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-100 hover:shadow-xl transition">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition">
                <BookOpenCheck size={26} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Strong Concept Building
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our tutors focus on clearing fundamentals so students feel confident
                in exams and everyday learning.
              </p>
            </div>

            <div className="group rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-100 hover:shadow-xl transition">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition">
                <Home size={26} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Safe Home Environment
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Learn comfortably at home with verified tutors, flexible timings,
                and regular academic guidance.
              </p>
            </div>

          </div>
          {/* Extra Text */}
          <div className="mt-16 max-w-4xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed">
              Whether you are preparing for school exams, board exams, or need regular
              academic support, our experienced tutors provide the right guidance
              in a comfortable and supportive environment.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-20 flex justify-center">
            <a
              href="https://forms.gle/your-google-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-sky-500 px-12 py-4 text-white text-lg font-semibold transition hover:bg-sky-600 shadow-lg"
            >
              Enroll Now
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
          </div>

        </div>
      </section>

    </>
  );
};

export default Student;
