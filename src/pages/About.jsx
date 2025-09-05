import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            About <span className="text-blue-600">MV Hostels</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            Welcome to  <b> Mata Vaishno Hostels </b> – your home away from home. Situated in the heart of
            <span className="font-medium"> Patel Nagar, Bhopal</span>, we provide safe,
            comfortable and student-friendly accommodation with modern amenities.
          </p>
        </div>

        {/* Intro Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <p className="text-gray-700 leading-relaxed">
            With <span className="font-semibold">up to 6 hostels</span> for both boys and girls,
            MV Hostels ensures a welcoming community where you can focus on studies,
            grow with peers, and enjoy a truly homely environment. We offer fully
            furnished rooms, clean dining, dedicated study spaces, reliable Wi-Fi,
            and round-the-clock security—everything you need for a worry-free stay.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <Stat label="Location" value="Patel Nagar, Bhopal" />
            <Stat label="Total Hostels" value="Up to 6" />
            <Stat label="Separate Wings" value="Boys & Girls" />
            <Stat label="Support" value="24×7 Security" />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Why Choose MV Hostels?</h3>
            <ul className="mt-5 space-y-3">
              {[
                "Prime location – near major colleges(like - Oriental College ,LNCT College ,NRI College,TIT College etc) & coaching centers",
                "Separate hostels for boys and girls",
                "Single, double & multiple sharing rooms (fully furnished)",
                "Hygienic dining with healthy meals",
                "High-speed Wi-Fi & dedicated study spaces",
                "CCTV surveillance & 24/7 security",
                "Laundry and regular housekeeping",
                "Friendly staff & supportive environment",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#rooms"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                View Rooms
              </a>
              <a
                href="#contact"
                className="inline-block border border-gray-300 text-gray-800 px-5 py-3 rounded-xl hover:bg-gray-100 transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Location / Map placeholder */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <h4 className="text-lg font-semibold text-gray-900">Our Location</h4>
            <p className="text-gray-600 mt-1">Patel Nagar, Bhopal, Madhya Pradesh</p>

            {/* Replace the iframe src with your exact Google Maps embed when ready */}
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                title="MV Hostels Location"
                className="h-full w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.7970755881706!2d77.49483797482381!3d23.250470279014724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c41a48c21bc15%3A0xd20c07bec2bd02f8!2sMATA%20VAISHNO%20BOYS%20AND%20GIRLS%20HOSTELS!5e0!3m2!1sen!2sin!4v1757096139992!5m2!1sen!2sin"
              />
            </div>

            <div className="mt-4 text-sm text-gray-600">
              Tip: Replace the map with your exact pin once you have the precise address.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ label, value }) => (
  <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
    <div className="text-sm text-gray-500">{label}</div>
    <div className="text-lg md:text-xl font-bold text-gray-900 mt-1">{value}</div>
  </div>
);

export default About;
