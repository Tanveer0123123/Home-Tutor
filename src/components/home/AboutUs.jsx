const AboutUs = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
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

          <div className="mt-8">
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-md font-medium">
              Know More
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex justify-center">
          <div className="w-full max-w-md h-72 bg-slate-50 rounded-xl flex items-center justify-center text-gray-400">
            Illustration Here
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
