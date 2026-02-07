import img from '../../assets/tutor-bhaiya-4.jpg'
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-white via-sky-50 to-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

        {/* Right Visual (Image) */}
        <div className="flex justify-center order-1 lg:order-2">
          <img
            className="rounded-2xl"
            src={img}
            alt="Tutor Bhaiya Home Tuition"
          />
        </div>

        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <span className="text-sky-500 font-semibold tracking-wide uppercase text-sm">
            About Tutor Bhaiya
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
            Trusted Home Tutors in Bhopal for Better Learning & Stronger Basics
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Tutor Bhaiya is a Bhopal-based home tuition platform, started with the
            aim of providing reliable and personalised one-to-one learning support
            to students in the city.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We are currently offering home tutor services across different areas
            of Bhopal, connecting students with experienced and verified local tutors.
            Our focus is on concept clarity, confidence building, and long-term
            academic success — not just marks.
          </p>

          <div className="mt-8">
            <Link
              to="/about-us"
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-md font-medium"
            >
              Know More..
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
