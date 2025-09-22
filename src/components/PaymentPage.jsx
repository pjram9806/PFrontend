import React, { useState } from "react";

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);

  // Load Razorpay script dynamically
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);

    // 1️⃣ Create order from backend
    const orderResponse = await fetch(
      "http://132.156.145.6:6500/api/payments/create-order",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: 1, // replace with logged in user id
          amount: 500, // amount in rupees
          method: "razorpay",
        }),
      }
    );

    const orderData = await orderResponse.json();
    console.log("Order Created:", orderData);

    if (!orderData.success) {
      alert("Failed to create order");
      setLoading(false);
      return;
    }

    // 2️⃣ Load Razorpay SDK
    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      setLoading(false);
      return;
    }

    // 3️⃣ Open Razorpay Checkout
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: orderData.order.amount, // ✅ FIXED
      currency: orderData.order.currency,
      name: "My Company Pvt Ltd",
      description: "Test Transaction",
      order_id: orderData.order.id, // ✅ FIXED
      handler: async function (response) {
        console.log("Payment Success:", response);

        // 4️⃣ Verify Payment with backend (send only 3 fields)
        const verifyResponse = await fetch(
          "http://132.156.145.6:6500/api/payments/verify",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            }),
          }
        );

        const verifyData = await verifyResponse.json();
        console.log("Verify Response:", verifyData);

        if (verifyData.success) {
          alert("✅ Payment Successful & Verified!");
        } else {
          alert("❌ Payment Failed Verification!");
        }
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
      // 🔑 Enable ALL payment methods including QR Code
      method: {
        upi: true, // UPI Apps + UPI QR
        netbanking: true,
        card: true,
        wallet: true,
        emi: true,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Pay with Razorpay</h2>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? "Processing..." : "Pay ₹500"}
      </button>
    </div>
  );
};

export default PaymentPage;
