import { useState } from "react";
import axios from "axios";

const OrderForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    plan: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://10.61.254.172:5000/api/bookings",
        {
          name: form.name,
          phone: form.phone,
          address: form.address,
          plan: form.plan,
          message: "",
        }
      );

      alert(response.data.message);

      setForm({
        name: "",
        phone: "",
        address: "",
        plan: "",
      });
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Cannot connect to backend!");
      }
    }
  };

  return (
    <section
      id="book"
      className="py-20 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-700">
            Book Your Tiffin 🍱
          </h2>

          <p className="text-center text-gray-500 mt-3 text-sm sm:text-base">
            Fill the form and we'll contact you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 mt-10">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="👤 Full Name"
              className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-green-600"
              required
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="📞 Mobile Number"
              className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-green-600"
              required
            />

            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="📍 Full Address"
              rows="4"
              className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-green-600 resize-none"
              required
            />

            <select
              name="plan"
              value={form.plan}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-green-600"
              required
            >
              <option value="">🍛 Select Meal Plan</option>

              <option value="One Time Meal - ₹2400">
                One Time Meal - ₹2400
              </option>

              <option value="Two Time Meal - ₹4000">
                Two Time Meal - ₹4000
              </option>
            </select>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white py-4 rounded-xl text-lg font-semibold transition duration-300"
            >
              Book Now 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;