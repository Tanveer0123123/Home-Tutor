import { useEffect, useRef, useState } from "react";
import { Users, GraduationCap, Clock, MapPin } from "lucide-react";

const stats = [
  {
    value: 120,
    label: "Students Taught",
    suffix: "+",
    icon: Users,
  },
  {
    value: 25,
    label: "Experienced Tutors",
    suffix: "+",
    icon: GraduationCap,
  },
  {
    value: 2,
    label: "Years Teaching Experience",
    suffix: "+",
    icon: Clock,
  },
  {
    value: 10,
    label: "Areas Covered in Bhopal",
    suffix: "+",
    icon: MapPin,
  },
];

const Achievements = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  // Detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!startCount) return;

    stats.forEach((stat, index) => {
      let current = 0;
      const increment = Math.ceil(stat.value / 50);

      const timer = setInterval(() => {
        current += increment;

        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });
      }, 30);
    });
  }, [startCount]);

  return (
    <section
      ref={sectionRef}
      className=" bg-gradient-to-b from-white via-sky-50 to-slate-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sky-500 font-semibold uppercase text-sm tracking-wide">
            Our Results
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Our Growing Journey So Far
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Small beginnings, honest work, and growing trust from parents
          </p>
        </div>

        {/* Stats Cards */}
        <div className=" mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className=" bg-gradient-to-br from-slate-200 via-sky-100 group rounded-3xl bg-white/80 backdrop-blur-md border border-white/50 p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl "
              >
                {/* Icon */}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition">
                  <Icon size={22} />
                </div>

                {/* Number */}
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                  {counts[i]}
                  <span className="text-sky-500">{item.suffix}</span>
                </h3>

                {/* Label */}
                <p className="mt-2 text-sm md:text-base text-gray-600">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
