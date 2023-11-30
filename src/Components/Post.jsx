import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Post.css"

const API = import.meta.env.VITE_API_URL;

const Post = ({ post, index }) => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`${API}/users/${userId}/posts/${post.id}`)
      .then((response) => response.json())
      .then((userData) => {
        setUser(userData);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, [post.user_id]);

  return (
    <div className="singlePost">
      <Link to={`/users/${userId}/posts/${post.id}`}>
        <div className="postInfo">
          <div className="postInfo-header">
            <span>{`${post.first_name} ${post.last_name}`}</span>
            <br />
            <span className="postInfo-header-title">{post.title}</span>
          </div>
          <div className="postInfo-body">
            {post.image ? <img src={post.image} /> : null}
            <br />
            <span>
              {new Date(Number(post.uploaded_at) * 1000).toLocaleDateString()}
            </span>
            <span>{post.description}</span>
            <br />
            <h6>{post.tags}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
