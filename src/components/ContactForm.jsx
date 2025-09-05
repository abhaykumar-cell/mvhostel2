import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_simm52m",   // 👈 EmailJS se copy karo
      "template_xsut4bv",  // 👈 EmailJS se copy karo
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "av5svNeSCTa9qc6EL"    // 👈 EmailJS Public Key
    )
    .then(() => {
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      setStatus("❌ Failed to send message.");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Send
      </button>
      <p className="text-center text-gray-600">{status}</p>
    </form>
  );
}
