import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./PostNewForm.css";

const API = import.meta.env.VITE_API_URL;

const PostNewForm = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [newPost, setNewPost] = useState({
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

  const createPost = () => {
    fetch(`${API}/users/${userId}/posts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not okay.");
        }
        return response.json(); // Parse response JSON here
      })
      .then((data) => {
        if (data) navigate(`/users/${userId}/posts`);
      })
      .catch((error) => console.error(error));
  };
  

  const handleTextInput = (e) => {
    setNewPost({ ...newPost, [e.target.id]: e.target.value });
  };

  const handleNumberInput = (e) => {
    const value = e.target.value;
    const changedValue = parseFloat(value) || 0;
    setNewPost({ ...newPost, interest_level: changedValue });
  };

  const handleCheckbox = () => {
    setNewPost({ ...newPost, super_interest: !newPost.super_interest });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uploaded = Date.now() / 1000;
    setNewPost({ ...newPost, uploaded_at: uploaded });
    createPost();
  };

  return (
    <div className="new-entry-post">
      <form className="new-entry-form" onSubmit={handleSubmit}>
        <label className="title labelfield" htmlFor="title">
          Title:
        </label>
        <input
          id="title"
          type="text"
          value={newPost.title}
          onChange={handleTextInput}
          placeholder="Title of post"
          required
        />
        <br />
        <label className="newdescription labelfield" htmlFor="description">
          Description:
        </label>
        <textarea
          className="descriptiontext textfield"
          id="description"
          type="text"
          value={newPost.description}
          onChange={handleTextInput}
          placeholder="Description"
          required
        />
        <br />
        <label className="image labelfield" htmlFor="image">
          Image URL:
        </label>
        <input
          id="image"
          type="text"
          value={newPost.image}
          onChange={handleTextInput}
          placeholder="Enter image URL (optional)"
        />
        <br />
        <label className="tags labelfield" htmlFor="tags">
          Tags:
        </label>
        <textarea
          className="tagstext textfield"
          id="tags"
          type="text"
          value={newPost.tags}
          onChange={handleTextInput}
          placeholder="Enter tags (planets, solar system, cosmis)"
        />
        <br />
        <label className="super-interest labelfield" htmlFor="super-interest">
          Favorite Topic:{" "}
        </label>
        <input
          id="super-interest"
          type="checkbox"
          value={newPost.super_interest}
          onChange={handleCheckbox}
        />
        <br />
        <label className="interest-level labelfield" htmlFor="interest-level">
          Level of Interest in Topic:
        </label>
        <input
          id="interest-level"
          type="number"
          value={newPost.interest_level}
          step={0.1}
          min={0}
          max={10}
          onChange={handleNumberInput}
          required
        /><br />
        <input className="form-submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PostNewForm;
