import React from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const ContactButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/<9650763066>?text=Hello!"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full text-white shadow-lg transition-transform transform hover:scale-105"
      >
        <FaWhatsapp size={24} />
      </Link>

      {/* Call Button */}
      <Link
        href="tel:<9650763066>"
        className="flex items-center justify-center w-14 h-14 bg-blue-500 rounded-full text-white shadow-lg transition-transform transform hover:scale-105"
      >
        <FaPhone size={24} />
      </Link>
    </div>
  );
};

export default ContactButtons;
