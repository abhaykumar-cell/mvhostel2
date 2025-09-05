import RoomCard from "../components/RoomCard";
import single from "../assets/single.jpg";
import double from "../assets/double.jpg";
import triple from "../assets/doubleRoome.jpg";

const Rooms = () => {
  const rooms = [
    {
      title: "Single Room",
      description: "Perfect for privacy and focus, fully furnished with study table and wardrobe.",
      image: single,
    },
    {
      title: "Double Sharing",
      description: "Spacious and comfortable, ideal for students who like to share and save.",
      image: double,
    },
    {
      title: "Triple Sharing",
      description: "Budget-friendly option with ample space and modern amenities.",
      image: triple,
    },
  ];

  return (
    <section id="rooms" className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
        Our Rooms
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            title={room.title}
            description={room.description}
            image={room.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Rooms;
