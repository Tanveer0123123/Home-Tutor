import tutor1 from "../../assets/img1.jpg";
import tutor2 from "../../assets/img1.jpg";
import tutor3 from "../../assets/img1.jpg";

const tutors = [
  {
    name: "Ankit Sharma",
    subject: "Mathematics",
    qualification: "B.Sc, B.Ed",
    experience: "5+ Years Experience",
    area: "MP Nagar",
    img: tutor1,
  },
  {
    name: "Neha Khan",
    subject: "Science",
    qualification: "M.Sc (Physics)",
    experience: "4+ Years Experience",
    area: "Arera Colony",
    img: tutor2,
  },
  {
    name: "Rahul Verma",
    subject: "English",
    qualification: "M.A (English)",
    experience: "6+ Years Experience",
    area: "Kolar Road",
    img: tutor3,
  },
];

const TutorProfiles = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sky-500 font-semibold uppercase text-sm tracking-wide">
            Our Tutors
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Meet Our Experienced Tutors
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Qualified, verified and experienced tutors for personalised learning
          </p>
        </div>

        {/* Tutor Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tutors.map((tutor, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center transition hover:shadow-xl"
            >
              {/* Profile Image */}
              <img
                src={tutor.img}
                alt={tutor.name}
                className="mx-auto h-28 w-28 rounded-full object-cover"
              />

              {/* Info */}
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {tutor.name}
              </h3>

              <p className="text-sky-500 font-medium">
                {tutor.subject}
              </p>

              <p className="mt-2 text-sm text-gray-600">
                {tutor.qualification}
              </p>

              <p className="mt-1 text-sm text-gray-600">
                {tutor.experience}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Area: {tutor.area}
              </p>
            </div>
          ))}
        </div>

        {/* View All Tutors */}
        <div className="mt-16 flex justify-center">
          <button className="rounded-md border border-sky-500 px-8 py-3 font-medium text-sky-500 transition hover:bg-sky-500 hover:text-white">
            View All Tutors
          </button>
        </div>

      </div>
    </section>
  );
};

export default TutorProfiles;
