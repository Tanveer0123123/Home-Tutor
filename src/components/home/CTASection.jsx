import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-200 via-sky-100 py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Looking for the right home tutor in Bhopal?
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Book a free demo class and experience personalised 1-to-1 learning
          at your home.
        </p>

        <div className="mt-10 flex justify-center">
          <Link to="/contact">
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-md font-medium">
            Book Free Demo
          </button>
          </Link>
          
        </div>

      </div>
    </section>
  );
};

export default CTASection;
