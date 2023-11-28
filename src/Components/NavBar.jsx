import React from "react";
import { Link, useParams } from "react-router-dom";
import cosmicConnectLogo from "../assets/cosmicConnectLogo.png";
import "./NavBar.css";

const NavBar = () => {
  const { userId } = useParams();
  return (
    <nav className="navbar-container">
      <Link to={`/users/${userId}/posts`}>
        <img src={cosmicConnectLogo} className="cosmicConnectLogo" />
      </Link>
      <h2 className="recentPosts navlink">
        <Link to={`/users/${userId}/posts`}>Recent Posts</Link>
      </h2>
      <h2 className="newPosts navlink">
        <Link to={`/users/${userId}/posts/new`}>New Post</Link>
      </h2>
    </nav>
  );
};

export default NavBar;
