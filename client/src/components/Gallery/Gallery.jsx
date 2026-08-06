import thali from "../../assets/food/thali.jpg";
import dal from "../../assets/food/dal.jpg";
import roti from "../../assets/food/roti.jpg";
import sabzi from "../../assets/food/sabzi.jpg";
import rice from "../../assets/food/rice.jpg";
import salad from "../../assets/food/salad.jpg";

const images = [
  { src: thali, title: "Marwadi Thali" },
  { src: dal, title: "Fresh Dal" },
  { src: roti, title: "Soft Rotis" },
  { src: sabzi, title: "Seasonal Sabzi" },
  { src: rice, title: "Steamed Rice" },
  { src: salad, title: "Fresh Salad" },
];

const Gallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-700">
          Fresh Food Gallery
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Homemade • Fresh • Pure Veg
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {images.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="bg-white p-4 text-center font-semibold">
                {item.title}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;