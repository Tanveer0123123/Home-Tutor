import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <p className="text-center py-20">Service not found</p>;
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            {service.title}
          </h1>
          <p className="mt-2 text-gray-300 text-sm">
            <Link to="/" className="hover:underline">Home</Link> /{" "}
            <Link to="/services" className="hover:underline">Services</Link> /{" "}
            {service.title}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-80 object-cover rounded-xl mb-8"
          />

          <h2 className="text-3xl font-bold text-slate-900">
            {service.title}
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {service.longDesc}
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 bg-sky-500 text-white px-8 py-3 rounded-md font-medium hover:bg-sky-600 transition"
          >
            Book Free Demo
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
