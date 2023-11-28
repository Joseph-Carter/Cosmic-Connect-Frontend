import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpForm.css";

const API = import.meta.env.VITE_API_URL;

const SignUpForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirmation: "",
  });

  const addUser = () => {
    fetch(`${API}/users/signup`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextInput = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser();
  };

  return (
    <div className="signUpForm">
      <header>
        Sign Up Form
      </header>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="firstName">First Name:</label> */}
        <input
          className="firstName signupInput"
          id="firstName"
          value={user.firstName}
          type="text"
          onChange={handleTextInput}
          placeholder="first name"
          required
        />
        <br />
        {/* <label htmlFor="lastName">Last Name:</label> */}
        <input
          className="lastName signupInput"
          id="lastName"
          value={user.lastName}
          type="text"
          onChange={handleTextInput}
          placeholder="last name"
          required
        />
        <br />
        {/* <label htmlFor="email">Email:</label> */}
        <input
          className="email signupInput"
          id="email"
          value={user.email}
          type="text"
          onChange={handleTextInput}
          placeholder="email"
          required
        />
        <br />
        {/* <label htmlFor="password">Password:</label> */}
        <input
          className="password signupInput"
          id="password"
          value={user.password}
          type="password"
          onChange={handleTextInput}
          placeholder="password"
          required
        />
        <br />
        {/* <label htmlFor="passwordConfirmation">Confirm Password:</label> */}
        <input
          className="confirmpassword signupInput"
          id="passwordConfirmation"
          value={user.passwordConfirmation}
          type="password"
          onChange={handleTextInput}
          placeholder="confirm password"
          required
        />
        <br />
        <button className="submitFormButton" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
