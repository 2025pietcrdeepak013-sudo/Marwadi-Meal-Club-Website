import { useState } from "react";
import axios from "axios";

// Use localhost for development, production URL for production
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const OrderForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    plan: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

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
        ...form,
        message: "",
      });

      setSuccess(res?.data?.message || "Booking Successful ✅");

      setForm({
        name: "",
        phone: "",
        address: "",
        plan: "",
      });

    } catch (err) {
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-green-100 p-5">

      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-lg p-8">

        <h2 className="text-3xl font-bold text-center text-green-700">
          🍱 Book Your Tiffin
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Fresh homemade food delivered to your door
        </p>

        {success && (
          <div className="bg-green-100 border border-green-500 text-green-700 px-4 py-3 rounded-lg mt-4 text-center font-bold">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Address Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Delivery Address
            </label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter your full delivery address"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />
          </div>

          {/* Plan Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Your Plan
            </label>
            <select
              name="plan"
              value={form.plan}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">-- Choose a Plan --</option>
              <option value="One Time Meal">🍱 One Time Meal - ₹2,400</option>
              <option value="Two Time Meal">🍱 Two Time Meal - ₹4,000</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 mt-6 font-bold text-white rounded-lg transition-all duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 active:scale-95"
            }`}
          >
            {loading ? "Booking in Progress..." : "Book Your Tiffin 🚀"}
          </button>
        </form>

      </div>
    </section>
  );
};

export default OrderForm;