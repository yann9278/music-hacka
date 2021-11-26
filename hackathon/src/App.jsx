import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import VideoLyrics from "./components/Video-lyric";


import Home from './components/Home';
import './App.css';



function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Home /> }></Route>
    <Route path='/Video' element={< VideoLyrics />}></Route>
    </Routes> 
     
    </div>
  );
}

export default App;
