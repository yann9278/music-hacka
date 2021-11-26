import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Top10List from './Top10List';
import './App.css';
import VideoLyrics from "./components/Video-lyric";

function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Top10List />}></Route>
    <Route path='/Video' element={< VideoLyrics />}></Route>
    </Routes> 
    </div>
  );
}

export default App;
