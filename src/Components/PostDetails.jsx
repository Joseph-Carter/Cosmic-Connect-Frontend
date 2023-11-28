import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./PostDetails.css"
import PostComment from "./PostComment";


const API = import.meta.env.VITE_API_URL;

const PostDetails = () => {
  const { userId, postId } = useParams();
  const navigate = useNavigate();
  const [comments, setComments] = useState([
    {
      id: 0,
      comment: "",
      commented_at: Date.now,
      post_id: 0,
      user_id: 0,
    },
  ]);
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`${API}/users/${userId}/posts/${postId}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        setPost(responseJSON);
      })
      .catch((error) => console.log(error));

    fetch(`${API}/users/${userId}/posts/${postId}/comments/${postId}`)
      .then((response) => response.json())
      .then((postComments) => {
        setComments(postComments);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = () => {
    const httpOptions = { method: "DELETE" };

    fetch(`${API}/users/${userId}/posts/${postId}`, httpOptions)
      .then((response) => {
        alert("Post has been deleted successfully.");
        navigate(`/users/${userId}/posts`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="postDetails">
      <div className="postInfo-header">
        <span>{`${post.first_name} ${post.last_name}`}</span>
        <br />
        <span className="postInfo-header-username">{post.title}</span>
      </div>
      <div className="postInfo-body">
        {post.image ? <img src={post.image} /> : null}
        <br />
        <span>{post.description}</span>
        <br />
        <h6>{post.tags}</h6>
        <div className="postDetails commentSection">
            {comments.sort((prev, next) => (prev.commented_at >= next.commented_at ? -1 : 1) ).map((comment) => (
              <PostComment comment={comment} key={comment.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
