import { useEffect, useState } from "react";
import heroData from "./heroData";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === heroData.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? heroData.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === heroData.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">

      {/* Background Images */}
      {heroData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.imageText}
            className="w-full h-full object-fill"
            alt=""
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            {heroData[current].title}
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            {heroData[current].description}
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-sky-500 hover:bg-sky-300 px-6 py-3 rounded font-semibold">
              Call Now
            </button>

            <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded font-semibold">
              WhatsApp
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
