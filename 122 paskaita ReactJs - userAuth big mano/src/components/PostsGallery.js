import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import CreatePost from './CreatPost';

const PostsGallery = ({}) => {
    const [posts, setPosts] = useState([])
    
    
const navigate = useNavigate()
const createPost = () => {
    navigate("/addPost")
}



    return (
        <div>
            <div className="p50 d-flex flex-wrap">
                {posts.map((x, i) => <CreatePost key={i} index={i} message={x} setMessages={setPosts}/>)}
            </div>
            <button onClick={createPost}>Create Post</button>
        </div>

    );
};

export default PostsGallery;