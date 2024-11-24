import React from "react";
import "./MedicineCard.css";

function MedicineCard({ medicine, addToCart }) {
  return (
    <div className="medicine-card">
      <img src={medicine.image} alt={medicine.name} className="medicine-image" />
      <p>{medicine.name}</p>
      <p>Price: ₹{medicine.price}</p>
      <button onClick={() => addToCart(medicine)}>Add to Cart</button>
    </div>
  );
}

export default MedicineCard;
