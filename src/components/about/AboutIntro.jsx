// import aboutImg from "../../assets/goods-3.jpeg";
import { Link } from "react-router-dom";

const AboutIntro = () => {
  return (
    <>
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
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div className="flex justify-center">
          <div className="w-full max-w-md h-72 bg-slate-50 rounded-xl flex items-center justify-center text-gray-400">
            Illustration Here
          </div>
        </div>
        

        {/* Right Visual */}
        <div>
          <span className="text-sky-500 font-semibold tracking-wide uppercase text-sm">
            About Us
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
            Personalised Home Tuition That Builds Confidence
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We are a Bhopal-based home tuition service dedicated to
            providing one-to-one personalised learning with verified
            local tutors.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our focus is not just better marks, but better understanding,
            stronger basics, and long-term academic growth in a safe
            home environment.
          </p>
        </div>

      </div>
    </section>
    </>
  );
};

export default AboutIntro;
