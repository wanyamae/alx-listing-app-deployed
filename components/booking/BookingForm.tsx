import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    // Simple validation: all fields required
    return Object.values(formData).every((val) => val.trim() !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!validateForm()) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      await axios.post("/api/bookings", formData);
      setSuccess("Booking confirmed!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
      });
    } catch (error) {
      console.error("Booking submission error:", error);
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <input
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        name="cardNumber"
        placeholder="Card Number"
        value={formData.cardNumber}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        name="expirationDate"
        placeholder="Expiration Date"
        value={formData.expirationDate}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        name="cvv"
        placeholder="CVV"
        value={formData.cvv}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        name="billingAddress"
        placeholder="Billing Address"
        value={formData.billingAddress}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded mt-2"
      >
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-600 mt-2">{success}</p>}
    </form>
  );
}