import React, { useState } from 'react';
import Logout from './Logout';
import ServerSideError from '../ServerSideError';


const AuthModule = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const [isServerSideError, setIsServerSideError] = useState(false)
  const [errorMessages, setErrorMessages] = useState([]);


  const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSignUp) {
      // Sign-up logic
      try {
        const response = await fetch("/api/v1/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrf,
          },
          body: JSON.stringify({
            user: {
              email: formFields.email,
              password: formFields.password,
              password_confirmation: formFields.passwordConfirmation,
            },
          }),
        });

        if (response.ok) {
          alert("Sign up successful!");
          // Redirect the user to the home page
          window.location.href = "/";
        } else {
          const errorData = await response.json();
          setErrorMessages(errorData.error || ["An unknown error occurred"]);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      // Login logic
      try {
        const response = await fetch("/api/v1/users/sign_in", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrf,
          },
          body: JSON.stringify({ user: { email: formFields.email, password: formFields.password } }),
        });

        if (response.ok) {
          setIsLoggedIn(true); // Set authentication status to true
        } else {
          const errorData = await response.json();
          console.log("errorData:", errorData);
          setErrorMessages(errorData.error || ["An unknown error occurred"]);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleFormFields = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  const switchForm = () => {
    setIsSignUp(!isSignUp);
  };

  // Conditionally render different components based on authentication status
  return (
    <>
      {!isLoggedIn ? (
        <div className="container ">
          <div className="row justify-content-center mb-10">
            <div className="col-md-6">
              <div className="card mt-5">
                <div className="card-body">
                {isServerSideError && <ServerSideError errors={errorMessages} />}
                  <h1 className="card-title text-center">{isSignUp ? 'Sign Up' : 'Login'}</h1>
                  <form onSubmit={handleSubmit}>
                    {isSignUp && (
                      <div className="form-group">
                        <label className="form-label mt-3 mb-3">Name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-3"
                          value={formFields.name}
                          onChange={handleFormFields}
                          name="name"
                          required
                        />
                      </div>
                    )}
                    <div className="form-group">
                      <label className="form-label mt-3 mb-3">Email</label>
                      <input
                        type="email"
                        className="form-control form-control-lg rounded-3"
                        value={formFields.email}
                        onChange={handleFormFields}
                        name="email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label mt-3 mb-3">Password</label>
                      <input
                        type="password"
                        className="form-control form-control-lg rounded-3"
                        value={formFields.password}
                        onChange={handleFormFields}
                        name="password"
                        required
                      />
                    </div>
                    {isSignUp && (
                      <div className="form-group">
                        <label className="form-label mt-3 mb-3">Confirm Password</label>
                        <input
                          type="password"
                          className="form-control form-control-lg rounded-3"
                          value={formFields.passwordConfirmation}
                          onChange={handleFormFields}
                          name="passwordConfirmation"
                          required
                        />
                      </div>
                    )}
                    <button type="submit" className="btn btn-primary w-100 mt-3">
                      {isSignUp ? 'Sign Up' : 'Login'}
                    </button>
                  </form>
                  <div className="text-center mt-3">
                    <small>
                      {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                      <button type="button" className="btn btn-link" onClick={switchForm}>
                        {isSignUp ? 'Login' : 'Sign Up'}
                      </button>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <p>You are logged in!</p>
          <Logout setIsLoggedIn={setIsLoggedIn} />
        </>
      )}
    </>
  );
};

export default AuthModule;
