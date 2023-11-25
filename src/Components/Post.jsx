import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

const Post = ({ post }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`${API}/users/${post.user_id}`)
      .then((response) => response.json())
      .then((userData) => {
        setUser(userData);
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  }, [post.user_id]);

  return (
    <div>
      {user && (
        <Link to={`/users/${user.id}/posts/${post.id}`}>
          <div className='postInfo'>
            <div className='postInfo-header'>
              <span>{`${user.first_name} ${user.last_name}`}</span><br />
              <span className='postInfo-header-username'>{post.title}</span>
            </div>
            <div className='postInfo-body'>
              { post.image ? <img src={post.image} /> : null}<br />
              <span>{post.description}</span><br />
              <h6>{post.tags}</h6>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Post;
