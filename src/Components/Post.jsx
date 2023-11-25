import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

const Post = ({ post }) => {
    const { userId } = useParams();

    return (
        <div>
            <Link to={`/users/${userId}/posts/${post.id}`}>
                <div className='postInfo'>
                    <div className='postInfo-header'>
                        <span></span>
                        <span className='postInfo-header-username'>{post.title}</span>
                    </div>
                    <div className='postInfo-body'>
                        <img src={post.image}></img><br />
                        <span>{post.description}</span><br />
                        <h6>{post.tags}</h6>
                    </div>
                    
                </div>
            </Link>
        </div>
    );
}

export default Post;
