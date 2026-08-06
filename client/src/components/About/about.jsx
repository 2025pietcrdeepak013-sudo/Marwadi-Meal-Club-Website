import { FaLeaf, FaUtensils, FaTruck, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaLeaf className="text-4xl text-green-600" />,
    title: "100% Pure Veg",
    desc: "Fresh vegetarian meals prepared daily.",
  },
  {
    icon: <FaUtensils className="text-4xl text-orange-500" />,
    title: "Homemade Taste",
    desc: "Just like food made in your mother's kitchen.",
  },
  {
    icon: <FaTruck className="text-4xl text-blue-500" />,
    title: "On-Time Delivery",
    desc: "Serving Pratap Nagar, Jagatpura, Sitapura and nearby areas.",
  },
  {
    icon: <FaHeart className="text-4xl text-red-500" />,
    title: "Made With Love",
    desc: "Every meal is prepared with care and hygiene.",
  },
];

const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <h2 className="text-5xl font-bold text-center text-green-700">
            Why Marwadi Meal Club?
          </h2>

          <p className="text-center mt-5 text-gray-600 max-w-3xl mx-auto">
            We believe every meal should feel like home.
            Fresh ingredients, hygienic cooking and timely delivery
            make every tiffin special.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .15 }}
              whileHover={{ y: -8 }}
              className="bg-orange-50 rounded-3xl p-8 shadow-lg"
            >

              <div className="mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default About;