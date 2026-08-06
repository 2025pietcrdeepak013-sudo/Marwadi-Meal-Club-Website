import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Plans from "./components/Plans/Plans";
import Reviews from "./components/Reviews/Reviews";
import OrderForm from "./components/OrderForm/OrderForm";
import Footer from "./components/Footer/Footer";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import SundaySpecial from "./components/SundaySpecial/SundaySpecial";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar />

<Hero />

<WhyChooseUs />

<Plans />

<SundaySpecial />

<Reviews />

<OrderForm />

<Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/918955329256"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Floating Call Button (Mobile Only) */}
      <a
        href="tel:8955329256"
        className="fixed bottom-24 right-5 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-2xl z-50 md:hidden transition hover:scale-110"
      >
        <FaPhoneAlt size={24} />
      </a>
    </>
  );
}

export default App;