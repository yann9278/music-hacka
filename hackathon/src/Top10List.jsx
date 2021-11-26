import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Top10 from './Top10';
import './Top10List.css';


export default function Top10List() {
    const[song, setSong] = useState([]);
   

useEffect(() => {
    axios.get(`https://cors-bypass.tkzprod.dev/api.deezer.com/search?q=edsheeran&limit=5}`).then((res) => {
    setSong(res.data.data);

} )
}, []);



return (
    <section className="containersong">
        <h2 className="Title"> Songs of Ed Sheeran </h2>
        {song.map((songs, index) => {
            return <Top10 className="song" key={index} id={songs.id} title={songs.title} image={songs.artist.picture_small} />
        })}
    </section>

)};