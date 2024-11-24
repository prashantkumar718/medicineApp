import React from "react";

function Payment() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Payment Page</h2>
      <p>Payment processing will be implemented here.</p>
      <button onClick={() => alert("Payment Successful!")}>Pay Now</button>
    </div>
  );
}

export default Payment;
