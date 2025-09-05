import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Rooms from "./pages/Room";
import Facilities from "./Pages/Facilities";
import Gallery from "./Pages/Gallery";
import Reviews from "./Pages/Reviews";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Rooms />
      <Facilities />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;