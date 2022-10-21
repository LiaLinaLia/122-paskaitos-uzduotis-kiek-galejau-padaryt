import React, {useState, useRef} from 'react';
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const navigate = useNavigate();
    const createPost = () => {
        navigate("/createPost");
    };

    const usernameRef = useRef()
    const titleRef = useRef()
    const imageRef = useRef()

   const sendPost = async () => {
        const post = {
            username: usernameRef.current.value,
            title: titleRef.current.value,
            image: imageRef.current.value,
        }
       await post("addPost", post);
       createPost()
    };
    
    return (
        <div>    
            <div className='register d-flex flex-wrap flex-column p50'>
                <input type="text" ref={usernameRef} placeholder="username"/>
                <input type="text" ref={titleRef} placeholder="title"/>
                <input type="text" ref={imageRef} placeholder="photo url"/>
                <button onClick={sendPost}>Create</button>
            </div>
        </div>
    );
};

export default CreatePost;