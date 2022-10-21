import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import ShowPhoto from "./components/ShowPhoto";
import PostsGallery from './components/PostsGallery';
import Test from './components/Test';
import CreatPost from './components/CreatPost';


function App() {

    return (

        // <div className="p50">
        //     <Register/>
        //     <Login/>
        //     {/* <ShowPhoto/> */}
        // </div>
        <div>
        <BrowserRouter>
        <Routes>
        <Route path='/info' element={<div className="p50"> <ShowPhoto/>  </div>} />
        <Route path='/galery' element={<div className="p50"> <PostsGallery/>  </div>} />
        {/* <Route path='/galery' element={ <UserGallery/>} /> */}
        <Route path="/createPost" element={<CreatPost/>} />

        <Route path='/' element={<div className="p50"> <Register/> <Login /> </div>} />
        <Route path="/test" element={<Test/>}/>
        </Routes>

      </BrowserRouter>
      </div>

    );
}

export default App;

