import React, {useState} from "react";

import Lyrics from "./Lyrics";
import SearchBar from "./Search-bar-video-lyrics";
import Video from "./Video";
import Banner from "./Banner";

function VideoLyrics() {
  const [name, setName] = useState('');
  const [song, setSong] = useState('');

    
  return (
      <div>
    <Banner/>
    <SearchBar setSong={setSong} setName={setName} name={name} song={song} />
    <Video name={name} song={song}/>
    <Lyrics name={name} song={song} />
  </div>
  );
}

  export default VideoLyrics;