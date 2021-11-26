import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Top10 from './Top10';


export default function Top10List() {
    const[song, setSong] = useState([]);

useEffect(() => {
    axios.get(`https://cors-bypass.tkzprod.dev/api.deezer.com/search?q=one`).then((res) => {
    setSong(res.data.data);

} )
}, []);


return (
    <main>
        <h2> Songs </h2>
        {song.map((songs, index) => {
            return <><Top10 key={index} id={songs.id} title={songs.title} image={songs.artist.picture_small} />
            <button className="ShowVideo"> Show video </button></> 
        })}
    </main>

)};

    

