import React, { useEffect, useState } from "react";
import axios from 'axios';

import DisplayVideo from "./Display-video";

import './Video.css';

const sampleVideo = "cYX-JMW7GkM";

function Video({song, name}) {
    const [videos, setVideos] =useState([])
  const [videoId, setVideoId] = useState(sampleVideo);

  const getVideo = () => {
      const index = Math.floor(Math.random() * 15)
      console.log(index);
      if(!videos[index].id.videoId) {
          getVideo()
      } else {
    setVideoId(videos[index].id.videoId);
      }
  };

  useEffect(() => {
    axios
    .get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${name} ${song}&chart=mostPopular&maxResults=15&key=AIzaSyCS8NAqiDUdXiBNrOtYQBL5t399jNZSHvc`)
    .then((response) => response.data)
    .then((data) => {
      console.log(data);
      setVideos(data.items);
    });
  }, [name, song])

  return (
      <div>
    <DisplayVideo videoId={videoId } />
    <button className="button-video" type="button" onClick={getVideo}>More videos of this artist!</button>
  </div>
  );
}

  export default Video;