import React from 'react';
import { useParams } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

const PostComment = ({comment}) => {
    const {userId, postId} = useParams();

    const handleDelete = () => {
        const httpOptions = { method: "DELETE"};

        fetch(`${API}/users/${userId}/posts/${postId}/comments/${comment.id}`, httpOptions)
        .then((response) => {
            if (response.ok) {

                alert("Comment has been deleted successfully.");
            } else {
                alert("Failed to delete comment.")
            }
          })
          .catch((error) => {
            console.log(error)
            alert("An error has occured while trying to delete this comment.")
          });
    };

    return (
        <div className='singleComment'>
            <p className='singleComment theComment'>{comment.comment}</p>
            <span className='singleComment timeAndDate'>{new Date(Number(comment.commented_at) * 1000).toLocaleString()}</span>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default PostComment;
