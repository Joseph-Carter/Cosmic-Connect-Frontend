import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

const Post = ({ post, index }) => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`${API}/users/${userId}/posts/${post.id}`)
    // console.log(post)
      .then((response) => response.json())
      .then((userData) => {
        console.log(userData)
        setUser(userData);
        console.log(user)
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  }, [post.user_id]);

  return (
    <div className='singlePost'>
      {user && (
        <Link to={`/users/${user.id}/posts/${post.id}`}>
          <div className='postInfo'>
            <div className='postInfo-header'>
              <span>{`${post.first_name} ${post.last_name}`}</span><br />
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
