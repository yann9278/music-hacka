// import { useState } from "react";
import React from 'react';

import './Search-bar-video-lyrics.css';

function SearchBar({ setName, setSong ,name, song, getVideo }) {
    // const [name, setName] = useState('');
    // const [song, setSong] = useState('');

    const display = (e) => {
        e.preventDefault();
        getVideo()
        console.log(`name: ${name} and song:${song}`)
    }
    return (
      <div className="search-bar-box">
      <form className="form">
      <label htmlFor="artist">
        Artist
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          placeholder="name of the artist"
        />
      </label>
      <br />
      <label className="songg" htmlFor="song">
        Song
        <input
          value={song}
          onChange={(e) => setSong(e.target.value)}
          type="text"
          name="song"
          id="song"
          placeholder="name of the song"
        />
      </label>
      <br />
      <br />
      <button onClick={display}  className="butotn-search"type="submit">
        Search
      </button>
    </form> 
      </div>
    );
  }

  export default SearchBar;