import { useState, createContext, useCallback, useContext } 
from "react";
import { useNavigate, Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;
const AuthContext = createContext();

export const AuthProvider = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: false,
    password: false,
  });

  const loginUser = (userInput) => {
      // console.log(userInput)
      console.log(API)
    fetch(`${API}/users/`, {
      method: "POST",
      body: JSON.stringify(userInput),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
     .then((response) => {
      console.log(response)
      return response.json()})
     .then(data => {
       setUser(data)
       console.log(data)
        navigate(`/users/${data.user.id}/posts`)
     })
  };

  

  const value = {
    user,
    setUser,
    loginUser,
  };
  return (
    <AuthContext.Provider value={value}>
      <div>{props.children}</div>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
