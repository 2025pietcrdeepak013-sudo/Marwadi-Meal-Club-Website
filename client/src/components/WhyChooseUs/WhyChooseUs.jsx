import {
  FaLeaf,
  FaTruck,
  FaRupeeSign,
  FaUtensils,
  FaHeart,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaLeaf />,
    title: "Fresh Homemade Food",
    desc: "Daily fresh cooked food with premium quality ingredients.",
  },
  {
    icon: <FaUtensils />,
    title: "100% Pure Veg",
    desc: "Healthy and delicious pure vegetarian meals every day.",
  },
  {
    icon: <FaTruck />,
    title: "On Time Delivery",
    desc: "Fast and timely delivery at your doorstep.",
  },
  {
    icon: <FaRupeeSign />,
    title: "Affordable Plans",
    desc: "Pocket-friendly monthly meal plans for everyone.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Hygienic Kitchen",
    desc: "Prepared in a clean and hygienic kitchen with care.",
  },
  {
    icon: <FaHeart />,
    title: "Maa Jaisa Taste",
    desc: "Enjoy homemade food with authentic Indian flavors.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why"
      className="py-20 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-green-700">
          Why Choose Us?
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Homemade Food with Quality, Hygiene & Love ❤️
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            >

              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-green-600 text-white flex items-center justify-center text-3xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-green-700">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;