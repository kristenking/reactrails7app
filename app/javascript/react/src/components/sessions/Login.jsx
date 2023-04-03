import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/v1/users/sign_in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrf,
        },
        body: JSON.stringify({ user: { email, password } }),
      });

      if (response.ok) {
        setIsLoggedIn(true); // Set authentication status to true
      } else {
        // Handle errors (e.g., display an error message)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Conditionally render different components based on authentication status
  return (
    <>
      {!isLoggedIn ? (
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
          <button type="submit">Login</button>
        </form>
      ) : (
        <p>You are logged in!</p>
      )}
    </>
  );
};

export default Login;
