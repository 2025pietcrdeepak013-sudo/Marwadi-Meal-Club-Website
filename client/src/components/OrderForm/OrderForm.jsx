import { useState } from "react";
import axios from "axios";

// 🔥 IMPORTANT: apna IP yaha daal
https://marwadi-backend.onrender.com/api/bookings

const OrderForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    plan: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.address || !form.plan) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${API_URL}/api/bookings`, {
        name: form.name,
        phone: form.phone,
        address: form.address,
        plan: form.plan,
        message: "",
      });

      console.log(res.data);

      alert(res?.data?.message || "Booking Successful ✅");

      setForm({
        name: "",
        phone: "",
        address: "",
        plan: "",
      });

    } catch (err) {
      console.error(err);

      if (err.response) {
        alert(err.response.data.error || "Server Error ❌");
      } else {
        alert("Cannot connect to backend ❌");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">

        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10">

          <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-700">
            Book Your Tiffin 🍱
          </h2>

          <p className="text-center text-gray-500 mt-3">
            Fill the form and we'll contact you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 mt-10">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="👤 Full Name"
              className="w-full border border-gray-300 rounded-xl p-4 focus:border-green-600 outline-none"
              required
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="📞 Mobile Number"
              className="w-full border border-gray-300 rounded-xl p-4 focus:border-green-600 outline-none"
              required
            />

            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="📍 Full Address"
              rows="4"
              className="w-full border border-gray-300 rounded-xl p-4 focus:border-green-600 outline-none resize-none"
              required
            ></textarea>

            <select
              name="plan"
              value={form.plan}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-4 focus:border-green-600 outline-none"
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
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-green-600 text-white py-4 rounded-xl text-lg font-semibold hover:scale-105 transition"
            >
              {loading ? "Booking..." : "Book Now 🚀"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default OrderForm;