import { Link } from "react-router-dom";
const Student = () => {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          Student
        </h1>
        <p className="mt-2 text-gray-300 text-sm">
          <Link to="/" className="hover:underline">Home</Link> / Student
        </p>
      </div>
    </section>

      {/* STUDENT INFO SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Learning That Fits Every Student
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            At HomeTutor Bhopal, we focus on understanding each student’s
            strengths, weaknesses, and learning pace. Our personalised
            one-to-one home tuition helps students build strong concepts,
            improve confidence, and perform better academically.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Whether you are preparing for school exams, board exams, or need
            regular academic support, our experienced tutors provide guidance
            in a comfortable and safe home environment.
          </p>

          {/* ENROLL BUTTON */}
          <div className="mt-12">
            <a
              href="https://forms.gle/your-google-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-sky-500 px-10 py-4 text-white text-lg font-medium hover:bg-sky-600 transition"
            >
              Enroll Now
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Student;
