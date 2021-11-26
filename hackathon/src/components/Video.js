import React from "react";

import DisplayVideo from "./Display-video";

import './Video.css';



function Video({ getVideo, videoId}) {



  return (
      <div>
            {videoId && <DisplayVideo videoId={videoId } /> }
    <button className="button-video" type="button" onClick={getVideo}>More popular videos of this artist!</button>

  </div>
  );
}

  export default Video;