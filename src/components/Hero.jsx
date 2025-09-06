import hostel1 from "../assets/hostel1.jpg";
import hostel2 from "../assets/hostel2.jpg";
import hostel3 from "../assets/hostel3.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 bg-gray-50">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
          Welcome to <span className="text-blue-600">MV Hostels</span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg">
          Situated in Patel Nagar, Bhopal – MV Hostels provides safe,
          comfortable and student-friendly living with modern facilities for
          both boys and girls.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#rooms"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300"
          >
            Explore Rooms
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Right Side - Image Layout */}
      <div className="md:w-1/2 grid grid-cols-2 gap-4 mt-12 md:mt-0 md:pl-12">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <img
            src={hostel2}
            alt="Hostel 1"
            className="rounded-2xl shadow-md shadow-gray-300 border border-gray-200 object-cover 
                       w-full h-40 sm:h-48 md:h-56 lg:h-64
                       transform transition duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-200"
          />
          <img
            src={hostel3}
            alt="Hostel 2"
            className="rounded-2xl shadow-md shadow-gray-300 border border-gray-200 object-cover 
                       w-full h-40 sm:h-48 md:h-56 lg:h-64
                       transform transition duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-200"
          />
        </div>

        {/* Right Column - Big Image */}
        <div className="flex items-center">
          <img
            src={hostel1}
            alt="Hostel 3"
            className="rounded-2xl shadow-md shadow-gray-300 border border-gray-200 object-cover 
                       w-full h-[340px] sm:h-[380px] md:h-[420px] lg:h-[460px]
                       transform transition duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-200"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
