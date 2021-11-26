import React, {useState} from "react";
import axios from 'axios';

import Lyrics from "./Lyrics";
import SearchBar from "./Search-bar-video-lyrics";
import Video from "./Video";
import Banner from "./Banner";

const sampleVideo = "cYX-JMW7GkM";

function VideoLyrics() {
  const [name, setName] = useState('');
  const [song, setSong] = useState('');
  const [videos, setVideos] =useState([])
  const [videoId, setVideoId] = useState(sampleVideo);

  const getVideo = () => {
    axios
    .get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${name} ${song}&chart=mostPopular&maxResults=15&key=AIzaSyCS8NAqiDUdXiBNrOtYQBL5t399jNZSHvc`)
    .then((response) => response.data)
    .then((data) => {
      console.log(data);
      setVideos(data.items);
    });
      const index = Math.floor(Math.random() * 15)
      console.log(index);
      if(!videos[index].id.videoId) {
          getVideo()
      } else {
    setVideoId(videos[index].id.videoId);
      }
  };
    
  return (
      <div>
    <Banner/>
    <SearchBar setSong={setSong} setName={setName} name={name} song={song} getVideo={getVideo} videoId={videoId} />
    <Video name={name} song={song} getVideo={getVideo} videoId={videoId} />
    <Lyrics name={name} song={song} />
  </div>
  );
}

  export default VideoLyrics;