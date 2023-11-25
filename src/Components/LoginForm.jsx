import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./UserAuth/UserContext";

const API = import.meta.env.VITE_API_URL;

const LoginForm = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const { user, loginUser } = useAuth();
  
  useEffect(() => {
    if (user.id) {
      navigate(`/users/${user.id}/posts`);
    }
  }, [user]);

  const handleTextInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(userInput);
  };

  return (
    <div className="loginForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          value={userInput.email}
          type="text"
          onChange={handleTextInput}
          placeholder="email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          value={userInput.password}
          type="password"
          onChange={handleTextInput}
          placeholder="password"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <button type="button">
        <Link to={`/signup`}>Sign Up</Link>
      </button>
    </div>
  );
};

export default LoginForm;
