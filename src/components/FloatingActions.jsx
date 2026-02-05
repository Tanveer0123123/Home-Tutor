import { Phone, X, MessageCircle } from "lucide-react";
import { useState } from "react";

const FloatingActions = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null; // hide everything

  return (
    <div className="fixed right-5 bottom-6 z-50 flex flex-col items-end gap-3">

      {/* Chat Label with Close */}
      <div className="flex items-center gap-2 bg-white text-slate-800 px-3 py-2 rounded-full shadow-md">
        <span className="text-sm font-medium">Chat on WhatsApp</span>
        <button
          onClick={() => setVisible(false)}
          className="text-gray-500 hover:text-gray-800"
        >
          <X size={14} />
        </button>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917770862216"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+917770862216"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-sky-500 text-white shadow-lg hover:scale-105 transition"
        title="Call Now"
      >
        <Phone size={26} />
      </a>

    </div>
  );
};

export default FloatingActions;
