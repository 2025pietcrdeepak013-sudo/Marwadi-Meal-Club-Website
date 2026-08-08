import { useState } from "react";
import axios from "axios";

const API_URL = "https://marwadi-backend.onrender.com";

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
          <p className="text-green-500 text-center font-bold mt-4">
            {success}
          </p>
        )}

      </div>
    </section>
  );
};

export default OrderForm;