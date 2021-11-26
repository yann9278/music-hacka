import React, {useEffect, useState} from "react";
import axios from 'axios';

import Lyrics from "./Lyrics";
import SearchBar from "./Search-bar-video-lyrics";
import Video from "./Video";
import Banner from "./Banner";

import './video-style.css';

const sampleVideo = "cYX-JMW7GkM";

function VideoLyrics() {
  const [name, setName] = useState('');
  const [song, setSong] = useState('');
  const [videos, setVideos] =useState([])
  const [videoId, setVideoId] = useState(sampleVideo);

  const getVideo = () => {
    axios
    .get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${name} ${song}&chart=mostPopular&maxResults=15&key=AIzaSyCaZ1559cmm13NCi4J9uhKytgJOkq5zs7o`)
    .then((response) => response.data)
    .then((data) => {
      console.log(data);
      setVideos(data.items);
    });

  };
  useEffect(()=> {
    if(videos.length){
      const index = Math.floor(Math.random() * 15)
      console.log(videos);
      if(!videos[index].id.videoId) {
          getVideo()
      } else {
    setVideoId(videos[index].id.videoId);
      }
    }
  },[videos])
    
  return (
      <div className="video-container">
    <Banner/>
    <SearchBar setSong={setSong} setName={setName} name={name} song={song} getVideo={getVideo} videoId={videoId} />
    <Video name={name} song={song} getVideo={getVideo} videoId={videoId} />
    <Lyrics name={name} song={song} />
  </div>
  );
}

  export default VideoLyrics;