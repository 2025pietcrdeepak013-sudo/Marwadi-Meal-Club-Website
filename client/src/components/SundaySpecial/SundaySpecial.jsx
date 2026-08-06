import { motion } from "framer-motion";

const SundaySpecial = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-100 to-green-100">

      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
        >

          <h2 className="text-3xl sm:text-5xl font-bold text-center text-orange-500">
            🍛 Sunday Special
          </h2>

          <p className="text-center text-gray-500 mt-4">
            Every Sunday Enjoy Our Traditional Marwadi Special Meal
          </p>

          <div className="grid sm:grid-cols-2 gap-8 mt-10">

            <div className="space-y-4 text-lg">

              <p>✅ Dal Baati Churma</p>

              <p>✅ Gatte Ki Sabzi</p>

              <p>✅ Jeera Rice</p>

              <p>✅ Papad</p>

            </div>

            <div className="space-y-4 text-lg">

              <p>✅ Fresh Salad</p>

              <p>✅ Pickle</p>

              <p>✅ Sweet Dish</p>

              <p>✅ Buttermilk</p>

            </div>

          </div>

          <div className="text-center mt-12">

            <a
              href="#book"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold transition"
            >
              Book Sunday Meal
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default SundaySpecial;