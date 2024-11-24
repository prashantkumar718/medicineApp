import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart({ cart }) {
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} style={{ padding: "10px", border: "1px solid #ddd" }}>
              <p>{item.name}</p>
              <p>Price: ₹{item.price}</p>
            </div>
          ))}
          <h3>Total Price: ₹{totalPrice}</h3>
          <button
            className="proceed-button"
            onClick={() => navigate("/payment")}
          >
            Proceed to Pay
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
