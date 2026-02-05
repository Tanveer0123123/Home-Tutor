import {
  UserCheck,
  BookOpen,
  Users,
  MapPin,
} from "lucide-react";

const features = [
  {
    title: "Verified Tutors",
    desc: "Background-checked and experienced teachers you can trust.",
    icon: UserCheck,
  },
  {
    title: "Free Demo Class",
    desc: "Attend a demo session before you decide.",
    icon: BookOpen,
  },
  {
    title: "1-to-1 Attention",
    desc: "Personal focus to improve understanding and confidence.",
    icon: Users,
  },
  {
    title: "Local Area Tutors",
    desc: "Tutors available near your location in Bhopal.",
    icon: MapPin,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Why Choose Home Tutor
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Everything we do is focused on better learning outcomes
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-xl p-8 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-50 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
