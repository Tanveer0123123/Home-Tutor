const steps = [
  {
    title: "Share Your Requirement",
    desc: "Tell us class, subject, location and preferred timings.",
  },
  {
    title: "Tutor is Assigned",
    desc: "We match you with a verified tutor best suited for you.",
  },
  {
    title: "Start Learning at Home",
    desc: "Attend free demo and begin regular personalised classes.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            How It Works
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Getting started with Home Tutor is simple and quick
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-12 md:grid-cols-3 text-center">
          {steps.map((step, i) => (
            <div key={i} className="relative px-6">

              {/* Step Number */}
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white font-bold text-lg">
                {i + 1}
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
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
