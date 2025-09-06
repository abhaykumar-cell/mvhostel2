import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Room";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

import WhatsAppButton from "./components/Button/WhatsButton";

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
      <WhatsAppButton />
    </div>
  );
}
export default App;