import React, {useState} from 'react';
import {get} from "../plugins/http";
import { useNavigate } from 'react-router-dom';

const ShowPhoto = () => {
    const navigate = useNavigate()


    const [photo, setPhoto] = useState("")

    const getPhoto = async () => {
        const secret = localStorage.getItem("secret")
        const res = await get("getPhoto/"+secret)

        if(!res.error) {
            setPhoto(res.data.photo)
        }
        console.log(res);
        <img src={photo} alt="" className='mt20 p10'/>

    }
    const galery = () => {
        navigate("/galery")

    }

    return (
        <div className='register d-flex flex-wrap flex-column p50 post img a-center'>
            {getPhoto() && <img src={photo} alt="" className='mt20 p10'/>}           
            <button className='mt20 p10'>CHANGE PHOTO</button>
            <button onClick={galery} className='mt20 p10'>ALL POSTS</button>
        </div>
    );
};

export default ShowPhoto;