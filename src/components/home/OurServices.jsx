import img1 from "../../assets/img1.jpg";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Home Tuition (Class 1–12)",
    desc: "Personalised home tuition for all subjects with full focus on understanding and confidence.",
    img: img1,
  },
  {
    title: "CBSE Board Support",
    desc: "Expert tutors for CBSE syllabus with exam-oriented and concept-based teaching.",
    img: img1,
  },
  {
    title: "MP Board Support",
    desc: "Specialised support for MP Board students with strong foundation building.",
    img: img1,
  },
  {
    title: "One-to-One Tuition",
    desc: "Complete personal attention tailored to the learning pace of each student.",
    img: img1,
  },
  {
    title: "Free Demo Class",
    desc: "Experience our teaching quality with a free demo session before enrolling.",
    img: img1,
  },
  {
    title: "Local Area Tutors",
    desc: "Verified tutors available near your location in Bhopal for easy coordination.",
    img: img1,
  },
];

const OurServices = () => {
  return (
    <section className="bg-gradient-to-b from-white via-sky-50 to-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sky-500 font-semibold uppercase text-sm tracking-wide">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Services Designed for Better Learning
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Thoughtfully designed home tuition services for students and parents
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-slate-200 via-sky-100 group overflow-hidden rounded-2xl border border-gray-100  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <img
                src={service.img}
                alt={service.title}
                className="h-48 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* view more text */}
                <p className="mt-6 text-sm font-medium text-sky-500 cursor-pointer hover:underline">
                  view more
                </p>
              </div>
            </div>
          ))}
        </div>

         {/* Bottom View More Button */}
        <div className="mt-16 flex justify-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-md border border-sky-500 px-8 py-3 text-sky-500 font-medium transition hover:bg-sky-500 hover:text-white"
          >
            View More
          </Link>
        </div>

      </div>
    </section>
  );
};

export default OurServices;
