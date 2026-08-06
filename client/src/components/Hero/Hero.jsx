import { motion } from "framer-motion";
import heroFood from "../../assets/hero-food.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-orange-50 via-white to-green-50 pt-24 md:pt-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold text-sm sm:text-base">
            🌱 Pure Veg • Fresh Everyday
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-green-700 leading-tight">
            Maa Jaisi Care
            <br />
            Har Meal Mein ❤️
          </h1>

          <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Fresh Homemade Pure Veg Tiffin Service in Jaipur.
            We deliver healthy and delicious meals every day.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <a
              href="#book"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition text-center"
            >
              Book Now
            </a>

            <a
              href="#plans"
              className="border-2 border-green-700 hover:bg-green-700 hover:text-white text-green-700 px-8 py-4 rounded-full font-semibold transition text-center"
            >
              View Plans
            </a>

          </div>

          <div className="mt-10 grid grid-cols-3 gap-5 sm:gap-8 text-center lg:text-left">

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-500">
                500+
              </h2>

              <p className="text-gray-600 text-sm sm:text-base">
                Happy Customers
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-green-700">
                100%
              </h2>

              <p className="text-gray-600 text-sm sm:text-base">
                Pure Veg
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-500">
                6+
              </h2>

              <p className="text-gray-600 text-sm sm:text-base">
                Delivery Areas
              </p>
            </div>

          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <img
            src={heroFood}
            alt="Marwadi Meal Club"
            className="w-72 sm:w-96 md:w-[450px] lg:w-[520px] hover:scale-105 transition duration-500 drop-shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;