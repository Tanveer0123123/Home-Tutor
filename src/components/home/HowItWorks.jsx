const steps = [
  {
    title: "Share Your Requirement",
    desc: "Tell us your class, subject, location and preferred timings.",
  },
  {
    title: "Tutor is Assigned",
    desc: "We match you with a verified tutor best suited for your needs.",
  },
  {
    title: "Start Learning at Home",
    desc: "Attend a free demo class and begin personalised learning.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-br from-slate-200 via-sky-50 to-white

 py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            How It Works
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Getting started with Tutor Bhaiya is simple, quick and hassle-free
          </p>
        </div>

        {/* Steps */}
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >

              {/* Step Number */}
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-600 font-bold text-xl group-hover:bg-sky-500 group-hover:text-white transition">
                {i + 1}
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
