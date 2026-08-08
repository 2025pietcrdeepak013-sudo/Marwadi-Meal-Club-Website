import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    title: "One Time Meal",
    price: "₹2,400",
    subtitle: "₹80 Per Tiffin",
    popular: false,
    features: [
      "4 Fresh Rotis",
      "1 Bowl Dal",
      "1 Bowl Seasonal Sabzi",
      "Rice",
      "Fresh Salad",
    ],
  },
  {
    title: "Two Time Meal",
    price: "₹4,000",
    subtitle: "Lunch + Dinner",
    popular: true,
    features: [
      "Lunch Included",
      "Dinner Included",
      "4 Fresh Rotis",
      "Dal",
      "Seasonal Sabzi",
      "Rice",
      "Fresh Salad",
    ],
  },
];

const Plans = () => {
  return (
    <section
      id="plans"
      className="py-20 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-green-700">
          Choose Your Meal Plan
        </h2>

        <p className="text-center text-gray-600 mt-4 text-sm sm:text-base">
          Healthy • Affordable • Homemade
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className={`relative bg-white rounded-3xl shadow-xl border-2 p-6 sm:p-8 flex flex-col ${
                plan.popular
                  ? "border-green-600"
                  : "border-orange-300"
              }`}
            >

              {plan.popular && (
                <span className="absolute top-4 right-4 bg-green-700 text-white px-4 py-1 rounded-full text-xs sm:text-sm">
                  ⭐ Most Popular
                </span>
              )}

              <h3 className="text-2xl sm:text-3xl font-bold text-green-700">
                {plan.title}
              </h3>

              <h1 className="text-4xl sm:text-5xl font-bold text-orange-500 mt-5">
                {plan.price}
              </h1>

              <p className="text-gray-500 mt-2">
                {plan.subtitle}
              </p>

              <div className="mt-8 space-y-4 flex-grow">

                {plan.features.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm sm:text-base"
                  >
                    <FaCheckCircle className="text-green-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}

              </div>

              <a
                href="#book"
                className="mt-10 w-full text-center bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white py-4 rounded-xl font-semibold transition duration-300"
              >
                Choose Plan
              </a>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Plans;