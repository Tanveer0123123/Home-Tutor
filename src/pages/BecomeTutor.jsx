import { Link } from "react-router-dom";
import { Clock, MapPin, Wallet, Headset, CheckCircle } from "lucide-react";

const BecomeTutor = () => {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Become a Tutor
          </h1>
          <p className="mt-2 text-gray-300 text-sm">
            <Link to="/" className="hover:underline">Home</Link> / Become Tutor
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="bg-gradient-to-br from-slate-200 via-sky-100 py-28">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT CONTENT */}
          <div className="relative">
            {/* accent bar */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-sky-500 to-indigo-500 rounded-full"></div>

            <div className="pl-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Teach. Inspire. Grow.
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Tutor Bhaiya Bhopal is building a trusted network of home tutors
                who believe in personalised teaching and real impact.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                If you are passionate about teaching and want flexibility,
                local students, and a respectful working environment —
                you’ll feel at home with us.
              </p>

              {/* highlights */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-sky-500 mt-1" size={20} />
                  <p className="text-gray-600">
                    Verified students and transparent process
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-sky-500 mt-1" size={20} />
                  <p className="text-gray-600">
                    Long-term teaching opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – TIMELINE BENEFITS */}
          <div className="space-y-10">

            <div className="flex gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-500">
                <Clock size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Flexible Teaching Hours
                </h3>
                <p className="mt-1 text-gray-600">
                  Choose timings that suit your schedule and lifestyle.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-500">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Students Near You
                </h3>
                <p className="mt-1 text-gray-600">
                  We match you with students close to your location.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-500">
                <Wallet size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Fair & Timely Payments
                </h3>
                <p className="mt-1 text-gray-600">
                  Clear payment structure with no unnecessary delays.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-500">
                <Headset size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Dedicated Support Team
                </h3>
                <p className="mt-1 text-gray-600">
                  Our team is always there to support you.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* CTA BAR */}
        <div className="mt-24">
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-500 p-10 text-center text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold">
              Ready to Start Your Teaching Journey?
            </h3>
            <p className="mt-3 text-white/90">
              Apply now and become a part of our growing tutor community.
            </p>

            <div className="mt-8">
              <a
                href="https://forms.gle/your-tutor-application-form"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white px-12 py-4 text-sky-600 font-semibold hover:bg-sky-100 transition"
              >
                Apply Now
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BecomeTutor;
