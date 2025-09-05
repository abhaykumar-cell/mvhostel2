import img1 from "../assets/double.jpg";
import img2 from "../assets/lunch.jpg";
import img3 from "../assets/MessArea.jpg";
import img4 from "../assets/Parking.jpg";
import img5 from "../assets/mess2.jpg";
import img6 from "../assets/openSpace.jpg";

const Gallery = () => {
  return (
    <section id="gallery" className="py-12 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src={img1}
            alt="Hostel 1"
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md w-full h-64 flex items-center justify-center bg-gray-100">
          <img
            src={img2}
            alt="Hostel 2"
            className="h-full object-contain transform scale-150 rotate-[270deg] transition-transform duration-500"
          />
        </div>

        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src={img3}
            alt="Hostel 3"
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src={img4}
            alt="Hostel 4"
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src={img5}
            alt="Hostel 5"
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src={img6}
            alt="Hostel 6"
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
