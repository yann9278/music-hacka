import axios from 'axios';
import React, { useState } from 'react';

import SongLyric from './song-lyric-card';

import './Lyrics.css';

const holderLyric = {
    lyrics: 'Please insert both Artist and Song'
}

function Lyrics({song, name}) {
const [theLyric, setTheLyric] = useState(false);
const [songLyric, setSongLyric] = useState(holderLyric);

function handleClickLyric() {
    console.log('song', song, 'name', name);
    if(!theLyric) {
        getLyric()
    }
   setTheLyric(!theLyric);
 }

 const getLyric = () => {
    axios
      .get(`https://api.lyrics.ovh/v1/${name}/${song}`)
      .then((response) => response.data)
      .then((data) => {
        setSongLyric(data);
      });
  };

 return (
<div className="lyric-box">
<div className="lyrics-button">
<h3>Lyrics</h3>
<button onClick={handleClickLyric}
className="display-lyrics">&#8595;</button>
</div>
<div className={theLyric ? "lyrics" : "nolyrics"}>
<div>
    <SongLyric lyric={songLyric} />
</div>
</div>
</div>
    );
}

export default Lyrics;