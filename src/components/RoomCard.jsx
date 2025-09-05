const RoomCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default RoomCard;
