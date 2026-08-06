import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-green-800 via-green-700 to-orange-500 text-white pt-14 pb-8"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold">
              Marwadi Meal Club
            </h2>

            <p className="mt-4 text-white/90 leading-7">
              Maa Jaisi Care, Har Meal Mein ❤️
              <br />
              Fresh Homemade Pure Veg Tiffin Service in Jaipur.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">

              <a
                href="tel:8955329256"
                className="flex items-center gap-3 hover:text-yellow-300 transition"
              >
                <FaPhoneAlt />
                +91 89553 29256
              </a>

              <a
                href="https://wa.me/918955329256"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-yellow-300 transition"
              >
                <FaWhatsapp />
                WhatsApp Us
              </a>

              <div className="flex items-center gap-3">
                <FaClock />
                8:00 AM - 10:00 PM
              </div>

            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Delivery Areas
            </h3>

            <div className="flex gap-3">

              <FaMapMarkerAlt className="mt-1" />

              <div>

                <p>Pratap Nagar, Jaipur</p>

                <p className="mt-3 leading-7">
                  📍 Pratap Nagar <br />
                  📍 Sitapura <br />
                  📍 Jagatpura <br />
                  📍 Durgapura <br />
                  📍 Gopalpura <br />
                  📍 Mansarovar
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/80">
          © 2026 Marwadi Meal Club | All Rights Reserved ❤️
        </div>

      </div>
    </footer>
  );
};

export default Footer;