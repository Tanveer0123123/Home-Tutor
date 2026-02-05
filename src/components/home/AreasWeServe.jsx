const areas = [
  "MP Nagar",
  "Anand Nagar",
  "Arera Colony",
  "Kolar Road",
  "Bawadiya Kalan",
  "Awadhpuri",
  "Saket Nagar",
  "Indrapuri",
  "Govindpura",
  "Hoshangabad Road",
  "Ayodhya Nagar",
  "Shahpura",
  "Misrod",
  "TT Nagar",
  "Piplani",
  "We Serve All Areas Of Bhopal",
  "More....",
];

const AreasWeServe = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sky-500 font-semibold uppercase text-sm tracking-wide">
            Areas We Serve
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Home Tuition Services Across Bhopal
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            We provide trusted home tutors in major residential areas of Bhopal
          </p>
        </div>

        {/* Areas List */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {areas.map((area, i) => (
            <span
              key={i}
              className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:border-sky-500 hover:text-sky-500 transition"
            >
              {area}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AreasWeServe;
