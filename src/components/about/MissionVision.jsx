const MissionVision = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8">

        <div className="bg-gradient-to-br from-slate-200 via-sky-100 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">
            Our Mission
          </h3>
          <p className="mt-3 text-gray-600">
            To provide quality home tuition that builds strong concepts,
            confidence, and long-term academic success.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-200 via-sky-100 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">
            Our Vision
          </h3>
          <p className="mt-3 text-gray-600">
            To become the most trusted home tuition platform in Bhopal
            for students and parents.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
