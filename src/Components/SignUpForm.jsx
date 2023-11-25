import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          value={user.firstName}
          type="text"
          onChange={handleTextInput}
          placeholder="First Name"
          required
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          value={user.lastName}
          type="text"
          onChange={handleTextInput}
          placeholder="Last Name"
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          value={user.email}
          type="text"
          onChange={handleTextInput}
          placeholder="email"
          required
         />
         <label htmlFor="password">Password:</label>
         <input
          id="password"
          value={user.password}
          type="password"
          onChange={handleTextInput}
          placeholder="password"
          required
         />
         <label htmlFor="passwordConfirmation">Confirm Password:</label>
         <input
          id="passwordConfirmation"
          value={user.passwordConfirmation}
          type="password"
          onChange={handleTextInput}
          placeholder="password"
          required
         />
         <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
