import { useState } from "react";
import { MapPin, BookOpen, Home, GraduationCap } from "lucide-react";
import tutor1 from "../../assets/img1.jpg";

const tutors = [
  {
    name: "Ankit Sharma",
    subject: "Mathematics",
    qualification: "B.Sc, B.Ed",
    experience: "5+ Years Experience",
    area: "MP Nagar",
    classes: "Class 6 – 10",
    mode: "Home Tuition",
    img: tutor1,
  },
  {
    name: "Neha Khan",
    subject: "Science",
    qualification: "M.Sc (Physics)",
    experience: "4+ Years Experience",
    area: "Arera Colony",
    classes: "Class 8 – 12",
    mode: "Home + Online",
    img: tutor1,
  },
  {
    name: "Rahul Verma",
    subject: "English",
    qualification: "M.A (English)",
    experience: "6+ Years Experience",
    area: "Kolar Road",
    classes: "Class 5 – 12",
    mode: "Home Tuition",
    img: tutor1,
  },
  {
    name: "Pooja Singh",
    subject: "Chemistry",
    qualification: "M.Sc (Chemistry)",
    experience: "3+ Years Experience",
    area: "Indrapuri",
    classes: "Class 9 – 12",
    mode: "Home + Online",
    img: tutor1,
  },
  {
    name: "Amit Patel",
    subject: "Physics",
    qualification: "B.Tech",
    experience: "7+ Years Experience",
    area: "BHEL",
    classes: "Class 11 – 12",
    mode: "Home Tuition",
    img: tutor1,
  },
];

const TutorProfiles = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleTutors = showAll ? tutors : tutors.slice(0, 3);

  return (
    <section className="bg-gradient-to-br from-slate-200 via-sky-100 to-white py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sky-500 font-semibold uppercase text-sm tracking-wide">
            Our Tutors
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Meet Our Experienced Tutors
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Verified tutors for personalised one-to-one learning
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleTutors.map((tutor, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-white/80 backdrop-blur-md border border-white/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Experience Badge */}
              <span className="absolute top-4 right-4 rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white shadow">
                {tutor.experience}
              </span>

              {/* Profile */}
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-400 blur-md opacity-60 group-hover:opacity-90"></div>
                  <img
                    src={tutor.img}
                    alt={tutor.name}
                    className="relative h-24 w-24 rounded-full object-cover border-4 border-white"
                  />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {tutor.name}
                </h3>

                <p className="text-sky-600 font-medium">
                  {tutor.subject}
                </p>

                <p className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                  <GraduationCap size={16} className="text-sky-500" />
                  {tutor.qualification}
                </p>
              </div>

              {/* Divider */}
              <div className="my-5 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

              {/* Details */}
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <BookOpen size={16} className="text-sky-500" />
                  {tutor.classes}
                </p>

                <p className="flex items-center gap-2">
                  <MapPin size={16} className="text-sky-500" />
                  {tutor.area}
                </p>

                <p className="flex items-center gap-2">
                  <Home size={16} className="text-sky-500" />
                  {tutor.mode}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-6 flex justify-center">
                <button className="rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-sky-600">
                  Book Free Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-md border border-sky-500 px-8 py-3 font-medium text-sky-500 transition hover:bg-sky-500 hover:text-white"
          >
            {showAll ? "Show Less Tutors" : "View All Tutors"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default TutorProfiles;
