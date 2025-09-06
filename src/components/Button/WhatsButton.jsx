import React from "react";
import { MessageCircle } from "lucide-react"; // WhatsApp style icon

export default function WhatsAppButton() {
  const phoneNumber = "918517881766";
  const message = "Hello, I want to connect with you!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
    >
      <MessageCircle size={28} />
    </a>
  );
}
