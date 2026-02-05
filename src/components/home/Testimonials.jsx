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
    name: "Pooja",
    role: "Parent (Class 6 Student)",
    feedback:
      "Very professional service. Local tutor, flexible timing, and regular feedback from the teacher.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            What Parents & Students Say
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Real experiences from families learning with Home Tutor
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <p className="text-gray-600 leading-relaxed">
                “{item.feedback}”
              </p>

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
    </section>
  );
};

export default Testimonials;
