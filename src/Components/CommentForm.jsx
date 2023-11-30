import React, { useState,  } from "react";
import { useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const CommentForm = () => {
  const { userId, postId } = useParams
  const [newCommentText, setNewCommentText] = useState("");

  const handleCreateComment = async () => {
    try {
      const httpOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: newCommentText,
          post_id: postId,
          user_id: userId,
          commented_at: Date.now(),
        }),
      };

      const response = await fetch(
        `${API}/users/${userId}/posts/${postId}/comments`,
        httpOptions
      );

      if (response.ok) {
        alert("Comment has been created successfully.");
        setNewCommentText("");
      } else {
        console.log(response);
        alert("Failed to create comment.");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while creating the comment.");
    }
  };

  const handleChange = (e) => {
    setNewCommentText(e.target.value);
  };
  return (
    <div>
      <div className="newComment">
        <textarea
          className="commentInput"
          value={newCommentText}
          onChange={handleChange}
          placeholder="Write your comment here..."
        />
        <button className="createCommentButton" onClick={handleCreateComment}>
          Create Comment
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
