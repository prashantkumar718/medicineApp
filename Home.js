import React from "react";
import MedicineCard from "../components/MedicineCard";
import "./Home.css";

function Home({ addToCart }) {
  const medicines = [
    { id: 1, name: "Paracetamol", price: 50, image: "/images/paracetamole.jpg" },
    { id: 2, name: "Aspirin", price: 75, image: "/images/aspirin.jpg" },
    { id: 3, name: "Ibuprofen", price: 100, image: "/images/ibuprofen.jpg" },
  ];

  return (
    <div style={{ display: "flex", overflowX: "auto", whiteSpace: "nowrap" }}>
      {medicines.map((medicine) => (
        <MedicineCard
          key={medicine.id}
          medicine={medicine}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default Home;
