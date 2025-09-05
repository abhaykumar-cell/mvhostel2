import TestimonialCard from "../components/TestimonialCard";

const Reviews = () => {
  const testimonials = [
    { name: "Rohit", text: "Best hostel experience, very clean and friendly staff!" },
    { name: "Anjali", text: "Affordable and safe, perfect for students." },
    { name: "Sarthak", text: "Great food and study environment." },
  ];

  return (
    <section id="reviews" className="py-12 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">What Our Students Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
      </div>
    </section>
  );
};
export default Reviews;
