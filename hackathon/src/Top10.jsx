import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Top10List.css';

function Top10({title, name, image}) {
    const[displayVideo, setDisplayVideo] = useState(false);

    const handleClick = () => {
        setDisplayVideo(!displayVideo);
    };

        return(
        <div className="song">
             <img src={image} alt="cover" />
        <p className="title"> {title} </p>
         <p className="singer"> {name} </p>
       
        <Link to="/Video" className="ShowVideo" onClick={handleClick}> Show video </ Link> 
        </div>
        )
       
    

};

export default Top10;