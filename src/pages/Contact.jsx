import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
        Contact Us
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Info Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Get in Touch
          </h3>
          <ul className="space-y-6 text-lg">
            <li className="flex items-center gap-4">
              <PhoneIcon className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700">+91 88277 46765</span>
            </li>
            <li className="flex items-center gap-4">
              <EnvelopeIcon className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700">mvhostels@gmail.com</span>
            </li>
            <li className="flex items-center gap-4">
              <MapPinIcon className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700">
                Flat No. Hig 3, 3ed Floor, Plot No 24, Patel Nagar, Anand Nagar (bhopal), Bhopal, Huzur, Madhya Pradesh, India, 462022
click Here For All The Companies At 462022 | Close

              </span>
            </li>
          </ul>
        </div>

        {/* Right Form Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <ContactForm />
        </div>
      </div>
    </section>
    
  );
};

export default Contact;
