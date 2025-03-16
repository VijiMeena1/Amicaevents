import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    // Retrieve cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleInputChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!customerInfo.name || !customerInfo.email || !customerInfo.address) {
      alert("Please fill in all required fields!");
      return;
    }

    const orderId = `ORD-${Math.floor(Math.random() * 100000)}`;
    const orderDetails = {
      orderId,
      customer: customerInfo,
      items: cartItems,
      totalAmount: calculateTotal(cartItems),
      status: "Booked",
    };

    // Store order details in localStorage
    localStorage.setItem("currentOrder", JSON.stringify(orderDetails));

    // Clear the cart after checkout
    localStorage.removeItem("cart");

    // Redirect to order success page
    navigate("/order-success");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto my-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={customerInfo.name}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={customerInfo.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Address</label>
        <textarea
          name="address"
          value={customerInfo.address}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-3">Order Summary</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="flex justify-between py-2 border-b">
          <span>{item.title}</span>
          <span>₹{item.price}</span>
        </div>
      ))}

      <div className="flex justify-between font-bold text-lg mt-4">
        <span>Total:</span>
        <span>₹{calculateTotal(cartItems)}</span>
      </div>

      <button
        className="block w-full mt-4 bg-[#00A4EF] hover:bg-[#0989c9] text-white font-bold py-2.5 rounded"
        onClick={handleCheckout}
      >
        Place Order
      </button>
    </div>
  );
}

const calculateTotal = (cartItems) => {
  return cartItems
    .reduce((total, item) => {
      let price = parseFloat(item.price.replace(/[^\d.]/g, "")) || 0;
      return total + price;
    }, 0)
    .toFixed(2);
};
