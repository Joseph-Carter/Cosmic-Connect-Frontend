import React from 'react';
import { Link, useParams } from 'react-router-dom';

const NavBar = () => {
    const { userId } = useParams();
    return (
        <nav>
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
