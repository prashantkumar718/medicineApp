import React, { useState } from "react";
import "./Login.css";


function Login() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleLogin = () => {
    if (name || number) {
      alert("Login Successful!");
    } else {
      alert("Please enter either name or number!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ margin: "10px", padding: "5px" }}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{ margin: "10px", padding: "5px" }}
      />
      <br />
      <button onClick={handleLogin} style={{ padding: "5px 10px" }}>
        Login
      </button>
    </div>
  );
}

export default Login;
