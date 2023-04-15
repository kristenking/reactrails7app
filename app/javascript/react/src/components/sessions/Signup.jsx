import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrf,
        },
        body: JSON.stringify({ user: { email, password, password_confirmation: passwordConfirmation } }),
      });
  
      if (response.ok) {
        alert("Sign up successful!");
    
        window.location.href = "/";
      } else {
   
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log('Request payload:', JSON.stringify({ user: { email, password, password_confirmation: passwordConfirmation } }));


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <button type="submit">Sign up</button>
    </form>
  );
};

export default Signup;
