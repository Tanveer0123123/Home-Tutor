// import aboutImg from "../../assets/goods-3.jpeg";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import { servicesData } from "../data/servicesData";

const services = [
  {
    title: "Home Tuition (Class 1–12)",
    desc: "Personalised home tuition for all subjects with full focus on understanding, confidence, and concept clarity.",
    img: img1,
  },
  {
    title: "CBSE Board Support",
    desc: "Expert tutors for CBSE syllabus with exam-oriented and concept-based teaching methods.",
    img: img1,
  },
  {
    title: "MP Board Support",
    desc: "Specialised home tuition support for MP Board students with strong foundation building.",
    img: img1,
  },
  {
    title: "One-to-One Personal Tuition",
    desc: "Complete individual attention tailored to the learning pace and needs of each student.",
    img: img1,
  },
  {
    title: "Free Demo Class",
    desc: "Attend a free demo class to experience our teaching quality before enrolling.",
    img: img1,
  },
  {
    title: "Local Area Tutors",
    desc: "Verified tutors available near your location in Bhopal for easy coordination and consistency.",
    img: img1,
  },
];

const Services = () => {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Our Services
          </h1>
          <p className="mt-2 text-gray-300 text-sm">
            <Link to="/services" className="hover:underline">Home</Link> / Our Services
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-gradient-to-b from-white via-sky-50 to-slate-50  py-24">
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
        <div className="  mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-br from-slate-200 via-sky-100 group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* VIEW MORE */}
                <Link
                  to={`/services/${service.id}`}
                  className="inline-block mt-6 text-sky-500 font-medium text-sm hover:underline"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
