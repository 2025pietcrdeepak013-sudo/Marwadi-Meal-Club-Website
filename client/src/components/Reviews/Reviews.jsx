import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rahul Sharma",
    text: "Fresh food every day. Taste bilkul ghar jaisa. Highly recommended!",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Priya Verma",
    text: "Best tiffin service in Pratap Nagar. Delivery always on time.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Amit Singh",
    text: "Affordable price and delicious food. Rotis are always fresh.",
    rating: "⭐⭐⭐⭐⭐",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-green-700">
          Happy Customers ❤️
        </h2>

        <p className="text-center text-gray-500 mt-3 text-sm sm:text-base">
          Loved by Students, Working Professionals & Families
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {reviews.map((review, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-orange-50 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >

              <div className="text-2xl">
                {review.rating}
              </div>

              <p className="mt-5 italic text-gray-700 leading-7 text-sm sm:text-base">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 mt-8">

                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-green-600 flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-green-700">
                    {review.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Verified Customer
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Reviews;