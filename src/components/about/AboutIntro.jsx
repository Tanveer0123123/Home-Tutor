import img from '../../assets/tutor-bhaiya-4.jpg'
import { Link } from "react-router-dom";

const AboutIntro = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            About Us
          </h1>
          <p className="mt-2 text-gray-300 text-sm">
            <Link to="/" className="hover:underline">Home</Link> / About Us
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-gradient-to-br from-slate-200 via-sky-100 py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Visual */}
          <div className="flex justify-center">
            <img
              className="rounded-2xl"
              src={img}
              alt="Tutor Bhaiya Home Tuition"
            />
          </div>

          {/* Right Content */}
          <div>
            <span className="text-sky-500 font-semibold tracking-wide uppercase text-sm">
              About Tutor Bhaiya
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
              Trusted Home Tutors in Bhopal for Better Learning & Stronger Basics
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Tutor Bhaiya is a Bhopal-based home tuition initiative, started with
              the goal of making quality one-to-one learning easily accessible
              to students across the city.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We are currently providing home tutor services in Bhopal, connecting
              students with experienced and verified local tutors. Our focus is on
              concept clarity, confidence building, and long-term academic growth —
              not just short-term marks.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutIntro;
