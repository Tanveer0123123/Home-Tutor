import img1 from "../assets/img1.jpg";
import { Link } from "react-router-dom";
// import img2 from "../assets/goods-2.jpeg";
// import img3 from "../assets/goods-3.jpeg";
// import img4 from "../assets/goods-4.jpeg";
// import img5 from "../assets/goods-5.jpeg";
// import img6 from "../assets/goods-6.jpeg";
// import img7 from "../assets/goods-7.jpeg";
// import img8 from "../assets/goods-8.jpeg";
// import img9 from "../assets/goods-9.jpeg";
// import img10 from "../assets/goods-10.jpeg";
// import img11 from "../assets/goods-11.jpeg";
// import img12 from "../assets/goods-12.jpeg";

const galleryImages = [
  img1,
  // img2,
  // img3,
  // img4,
  // img5,
  // img6,
  // img7,
  // img8,
  // img9,
  // img10,
  // img11,
  // img12,
];

const Gallery = () => {
  return (
    <>
    <section className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          Gallery
        </h1>
        <p className="mt-2 text-gray-300 text-sm">
          <Link to="/" className="hover:underline">Home</Link> / Gallery
        </p>
      </div>
    </section>
    <section className="bg-gradient-to-br from-slate-200 via-sky-100 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sky-500 font-semibold uppercase text-sm tracking-wide">
            Gallery
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Learning Moments with Our Tutors
          </h2>

          <p className="mt-4 text-gray-600">
            A glimpse of our home tuition sessions, tutors, and learning
            environment across Bhopal.
          </p>
        </div>

        {/* IMAGES GRID */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
    
  );
};

export default Gallery;
