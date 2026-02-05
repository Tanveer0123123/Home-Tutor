const stats = [
  {
    value: "120+",
    label: "Students Taught",
  },
  {
    value: "25+",
    label: "Experienced Tutors",
  },
  {
    value: "2+ Years",
    label: "Teaching Experience",
  },
  {
    value: "10+",
    label: "Areas Covered in Bhopal",
  },
];

const Achievements = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sky-500 font-semibold uppercase text-sm tracking-wide">
            Our Results
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Our Growing Journey So Far
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Small beginnings, honest work, and growing trust from parents
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((item, i) => (
            <div key={i}>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                {item.value}
              </h3>
              <p className="mt-2 text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
