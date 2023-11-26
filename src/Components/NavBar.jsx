import React from 'react';
import { Link, useParams } from 'react-router-dom';
import cosmicConnectLogo from "../assets/cosmicConnectLogo.png"

const NavBar = () => {
    const { userId } = useParams();
    return (
        <nav>
            <img src={cosmicConnectLogo} />
            <h2>
                <Link to={`/users/${userId}/posts`}>Posts</Link>
            </h2>
            <h2>
                <Link to={`/users/${userId}/posts/newpost`}>New Post</Link>
            </h2>
        </nav>
    );
}

export default NavBar;
