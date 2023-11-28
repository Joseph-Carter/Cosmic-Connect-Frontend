import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";

const API = import.meta.env.VITE_API_URL;

const Posts = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${API}/users/${userId}/posts`)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        setPosts(responseJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="posts">
      {posts
        .sort((prev, next) => (prev.uploaded_at >= next.uploaded_at ? -1 : 1))
        .map((post) => (
          <Post key={post.id} post={post} />
        ))}
    </div>
  );
};

export default Posts;
