import img from '../../assets/tutor-bhaiya-1.jpg'
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-b from-white via-sky-50 to-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-sky-500 font-semibold uppercase text-sm tracking-wide">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
            Why Parents Trust Tutor Bhaiya
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We understand that every student is different. Our home tuition
            approach focuses on personalised learning, experienced tutors,
            and complete transparency.
          </p>

          {/* POINTS */}
          <div className="mt-8 space-y-4">
            {[
              "Verified and experienced local tutors",
              "One-to-one personalised attention",
              "Free demo class before finalising",
              "Regular feedback and progress tracking",
              "Safe and comfortable home learning",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="text-sky-500 mt-1" size={20} />
                <p className="text-gray-600">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={img}
            alt="Why Choose Home Tutor"
            className=" rounded-xl "
          />
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
