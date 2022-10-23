import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import ShowPhoto from "./components/ShowPhoto";
import PostsGallery from './components/PostsGallery';
// import Test from './components/Test';
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
        {/* <Route path='/galery' element={ <PostsGallery/>} /> */}
        <Route path="/addPost" element={<CreatPost/>} />

        <Route path='/' element={<div className="p50"> <Register/> <Login /> </div>} />
        {/* <Route path="/test" element={<Test/>}/>  //pvz. navigacijos iš test failo */}
        </Routes>

      </BrowserRouter>
      </div>

    );
}

export default App;

