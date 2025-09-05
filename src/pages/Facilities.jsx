const Facilities = () => {
  const list = ["24/7 Security", "High-Speed WiFi", "Laundry Service", "Mess Facility", "Study Room", "Rooftop Area"];

  return (
    <section id="facilities" className="py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Facilities</h2>
      <ul className="grid md:grid-cols-3 gap-6">
        {list.map((f, i) => (
          <li key={i} className="bg-gray-100 p-6 rounded-lg shadow-md">{f}</li>
        ))}
      </ul>
    </section>
  );
};
export default Facilities;
