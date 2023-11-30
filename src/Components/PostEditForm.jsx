import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./PostEditForm.css";

const API = import.meta.env.VITE_API_URL;

const PostEditForm = () => {
  const navigate = useNavigate();
  const { userId, postId } = useParams();
  const [editPost, setEditPost] = useState({
    id: 0,
    title: "",
    description: "",
    image: "",
    tags: "",
    super_interest: false,
    interest_level: 0,
    uploaded_at: Date.now(),
    user_id: 0,
  });

  useEffect(() => {
    fetch(`${API}/users/${userId}/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setEditPost(data);
      })
      .catch((error) => console.error(error));
  }, [userId, postId]);

  const updatePost = () => {
    fetch(`${API}/users/${userId}/posts/${postId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editPost),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not okay.");
        }
        return response.json();
      })
      .then((data) => {
        navigate(`/users/${userId}/posts/${postId}`);
      })
      .catch((error) => console.error(error));
  };

  const handleTextInput = (e) => {
    setEditPost({ ...editPost, [e.target.id]: e.target.value });
  };

  const handleCheckbox = () => {
    setEditPost({ ...editPost, super_interest: !post.super_interest });
  };

  const handleNumberInput = (e) => {
    const value = e.target.value;
    const changedValue = parseFloat(value) || 0;
    setEditPost({ ...editPost, interest_level: changedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uploaded = Date.now() / 1000;
    setEditPost({ ...editPost, uploaded_at: uploaded });
    updatePost();
  };

  return (
    <div className="edit-post">
      <form className="edit-post-form" onSubmit={handleSubmit}>
        <label className="title label" htmlFor="title">
          Title:
        </label>
        <input
          className="title inputeditfield"
          id="title"
          type="text"
          value={editPost.title}
          onChange={handleTextInput}
          placeholder="Title of post"
          required
        />
        <label className="description label" htmlFor="description">
          Description:
        </label>
        <textarea
          className="descriptiontext edittextfield"
          id="description"
          type="text"
          value={editPost.description}
          onChange={handleTextInput}
          placeholder="Description"
          required
        />
        <label className="image label" htmlFor="image">
          Image URL:
        </label>
        <input
          className="image inputeditfield"
          id="image"
          type="text"
          value={editPost.image}
          onChange={handleTextInput}
          placeholder="Enter image URL (optional)"
        />
        <label className="tags label" htmlFor="tags">
          Tags:
        </label>
        <textarea
          className="tags edittextfield"
          id="tags"
          type="text"
          value={editPost.tags}
          onChange={handleTextInput}
          placeholder="Enter tags (planets, solar system, cosmis)"
        />
        <label className="super-interest label" htmlFor="super-interest">
          Favorite Topic:{" "}
        </label>
        <input
          className="super_interest inputeditfield"
          id="super-interest"
          type="checkbox"
          value={editPost.super_interest}
          onChange={handleCheckbox}
        />
        <label className="interest-level label" htmlFor="interest-level">
          Level of Interest in Topic:
        </label>
        <input
          className="interest_level inputeditfield"
          id="interest-level"
          type="number"
          value={editPost.interest_level}
          step={0.1}
          min={0}
          max={10}
          onChange={handleNumberInput}
          required
        />
        <br />
        <input className="form-submit" type="submit" value="Update Post" />
      </form>
    </div>
  );
};

export default PostEditForm;
