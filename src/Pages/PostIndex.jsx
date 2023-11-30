import React from 'react';
import Posts from "../Components/Posts"
import NavBar from '../Components/NavBar';
import "./PostIndex.css"

const PostIndex = () => {
    return (
        <div className='posts'>
            <NavBar />
            <Posts />
        </div>
    );
}

export default PostIndex;
