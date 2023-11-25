import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

const Post = ({ post }) => {
    const [userInfo, setUserInfo] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        fetch(`${API}/users/${userId}`)
        .then((response) => {response.json()})
        .then((responseJSON) => {
            console.log(responseJSON)
            setUserInfo(responseJSON)
        })
        .catch((error) => {console.log(error)})
    }, [])

    return (
        <div>
            <Link to={`/posts/${post.id}`}>
                <div className='postInfo'>
                    <div className='postInfo-header'>
                        <span>{userInfo.first_name} {userInfo.last_name}</span>
                        <span className='postInfo-header-username'>{post.title}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Post;
