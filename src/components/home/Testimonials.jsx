import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anjali Sharma",
    role: "Parent (Class 8 Student)",
    feedback:
      "The tutor assigned was very supportive and experienced. My child’s confidence and understanding have improved a lot.",
  },
  {
    name: "Rahul Verma",
    role: "Class 10 Student",
    feedback:
      "The one-to-one attention helped me clear my basics. The demo class made it easy to trust the process.",
  },
  {
    name: "Pooja Singh",
    role: "Parent (Class 6 Student)",
    feedback:
      "Very professional service. Local tutor, flexible timing, and regular feedback from the teacher.",
  },
];

// duplicate for infinite effect
const sliderData = [...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-white via-sky-50 to-slate-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
           <span className="text-sky-500 font-semibold uppercase text-sm tracking-wide">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            What Parents & Students Say
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Real experiences from families learning with Tutor Bhaiya
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-20">
          <div className="flex gap-8 animate-testimonial-slide">
            {sliderData.map((item, i) => (
              <div
                key={i}
                className="min-w-[320px] max-w-[320px] rounded-3xl bg-gradient-to-br from-slate-200 via-sky-100 backdrop-blur-md p-8 shadow-lg border border-white/40"
              >
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-sky-500 opacity-70" />

                {/* Feedback */}
                <p className="mt-4 text-gray-600 leading-relaxed">
                  “{item.feedback}”
                </p>

                {/* User */}
                <div className="mt-6">
                  <p className="font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Animation Style */}
      <style>
        {`
          @keyframes testimonial-slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-testimonial-slide {
            animation: testimonial-slide 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
