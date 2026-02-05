import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 120,
    label: "Students Taught",
    suffix: "+",
  },
  {
    value: 25,
    label: "Experienced Tutors",
    suffix: "+",
  },
  {
    value: 2,
    label: "Years Teaching Experience",
    suffix: "+",
  },
  {
    value: 10,
    label: "Areas Covered in Bhopal",
    suffix: "+",
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
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!startCount) return;

    stats.forEach((stat, index) => {
      let current = 0;
      const increment = Math.ceil(stat.value / 50); // smoothness control

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
    <section ref={sectionRef} className="bg-slate-50 py-24">
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

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((item, i) => (
            <div key={i}>
              <h3 className="text-3xl md:text-4xl font-bold text-sky-500">
                {counts[i]}
                {item.suffix}
              </h3>
              <p className="mt-2 text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
