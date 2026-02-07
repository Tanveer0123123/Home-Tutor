import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Change handler
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("Please enter your Name and Mobile Number.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        access_key: "44b1597a-8e56-4730-82aa-34eaee3b0f0f",
        subject: "New Enquiry - Home Tutor Bhopal",
        from_name: "Home Tutor Website",
        ...formData,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!data.success) {
        alert("Something went wrong. Please try again!");
        return;
      }

      // WhatsApp redirect
      const whatsappNumber = "917770862216";
      const text = `New Home Tutor Enquiry%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
Email: ${formData.email}%0A
Message: ${formData.message}`;

      window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");

      alert("Enquiry submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* CONTACT SECTION */}
      <section className="bg-gradient-to-b from-white via-sky-50 to-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* LEFT INFO */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Contact Us
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Get in touch with Home Tutor Bhopal to book a free demo class
                or enquire about personalised home tuition.
              </p>

              {/* CONTACT DETAILS */}
              <div className="mt-6 space-y-4 text-gray-700">
                <div className="flex gap-3 items-start">
                  <Phone className="text-sky-500 mt-1" size={18} />
                  <p className="font-medium">+91 77708 62216</p>
                </div>

                <div className="flex gap-3 items-start">
                  <Mail className="text-sky-500 mt-1" size={18} />
                  <p className="font-medium">info@hometutorbhopal.com</p>
                </div>

                <div className="flex gap-3 items-start">
                  <MapPin className="text-sky-500 mt-1" size={18} />
                  <p className="leading-relaxed">
                    158 New Shiv Nagar, Anand Nagar,  
                    Bhopal, Madhya Pradesh
                  </p>
                </div>
              </div>

              {/* QUICK ACTION */}
              <div className="mt-8 flex gap-4">
                <a
                  href="tel:+917770862216"
                  className="inline-flex items-center justify-center rounded-md bg-sky-500 px-6 py-3 text-white font-medium hover:bg-sky-600 transition"
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/917770862216"
                  className="inline-flex items-center justify-center rounded-md border border-sky-500 px-6 py-3 text-sky-500 font-medium hover:bg-sky-500 hover:text-white transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* FORM */}
            <div className="bg-slate-50 p-6 md:p-8 rounded-xl shadow-sm">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:border-sky-500"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:border-sky-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email (optional)"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:border-sky-500"
                />

                <textarea
                  rows="4"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:border-sky-500"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-md bg-sky-500 py-3 text-white font-medium hover:bg-sky-600 transition disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "Submit Enquiry"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="w-full">
        <iframe
          title="Home Tutor Bhopal Location"
          src="https://www.google.com/maps?q=158%20New%20Shiv%20Nagar%20Anand%20Nagar%20Bhopal&output=embed"
          width="100%"
          height="420"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
};

export default ContactUs;
