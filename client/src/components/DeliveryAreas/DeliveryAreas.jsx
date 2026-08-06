import { FaMapMarkerAlt } from "react-icons/fa";

const areas = [
  "Pratap Nagar",
  "Sitapura",
  "Jagatpura",
  "Mansarovar",
  "Durgapura",
  "Gopalpura",
];

const DeliveryAreas = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-700">
          Delivery Areas 🚚
        </h2>

        <p className="text-center text-gray-600 mt-3">
          We deliver fresh homemade meals in these locations.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {areas.map((area, index) => (
            <div
            data-aos="fade-up"
              key={index}
              className="bg-orange-50 rounded-2xl p-6 shadow hover:shadow-xl transition duration-300 flex items-center gap-4"
            >
              <FaMapMarkerAlt className="text-orange-500 text-2xl" />
              <h3 className="text-xl font-semibold">{area}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DeliveryAreas;