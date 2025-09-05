import hostel1 from "../assets/hostel1.jpg";
import hostel2 from "../assets/hostel2.jpg";
import hostel3 from "../assets/hostel3.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-18 bg-gray-50">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
          Welcome to <span className="text-blue-600">MV Hostels</span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          Situated in Patel Nagar, Bhopal – MV Hostels provides safe,
          comfortable and student-friendly living with modern facilities for
          both boys and girls.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#rooms"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Explore Rooms
          </a>

          <a className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300" href="#contact">
            Contact Us
          </a>
        </div>
      </div>

      {/* Right Side - Special Image Layout */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative pl-10 md:pl-20">
        {/* Column for img-2 and img-3 */}
        <div className="flex flex-col gap-4">
          <img
            src={hostel2}
            alt="Hostel 1"
            className="w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] rounded-xl shadow-lg shadow-gray-400 border border-gray-200 object-cover 
                       transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300"
          />
          <img
            src={hostel3}
            alt="Hostel 2"
            className="w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] rounded-xl shadow-lg shadow-gray-400 border border-gray-200 object-cover 
                       transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300"
          />
        </div>

        {/* Img-1 overlapping on right side */}
        <img
          src={hostel1}
          alt="Hostel 3"
          className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[240px] rounded-xl shadow-lg shadow-gray-400 border border-gray-200 object-cover absolute top-16 left-16
                     transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300"
        />
      </div>
    </section>
  );
};

export default Hero;
