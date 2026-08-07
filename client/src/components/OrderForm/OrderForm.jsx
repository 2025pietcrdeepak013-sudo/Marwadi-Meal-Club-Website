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
    <div>Order Form Working ✅</div>
  );
};

export default OrderForm;
