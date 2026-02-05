import { useEffect, useState } from "react";
import heroData from "./heroData";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === heroData.length - 1 ? 0 : prev + 1
      );
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  const data = heroData[current];

  return (
    <section className="bg-slate-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            {data.title}
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            {data.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-md font-medium">
              {data.primaryBtn}
            </button>
            <button className="border border-sky-500 text-sky-500 px-6 py-3 rounded-md font-medium hover:bg-sky-50">
              {data.secondaryBtn}
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block">
          <div className="h-80 bg-white rounded-lg shadow flex items-center justify-center text-gray-400">
            {data.imageText}
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 pb-6">
        {heroData.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === current ? "bg-sky-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
