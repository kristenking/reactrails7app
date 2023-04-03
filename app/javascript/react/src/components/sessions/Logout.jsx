import React, { useState } from "react";

const Logout = () => {
  const [message, setMessage] = useState("");

  const csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/v1/users/sign_out", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrf,
        },
      });

      if (response.ok) {
        setMessage("You have been successfully logged out");
      } else {
        // Handle errors (e.g., display an error message)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {message && <p>{message}</p>}
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Logout;
