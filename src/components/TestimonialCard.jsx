const TestimonialCard = ({ name, text }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <p className="text-gray-700 italic">“{text}”</p>
      <h4 className="mt-4 font-bold text-blue-600">- {name}</h4>
    </div>
  );
};
export default TestimonialCard;
