import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Top10({title, name, image}) {
    const[displayVideo, setDisplayVideo] = useState(false);

    const handleClick = () => {
        setDisplayVideo(!displayVideo);
    };

        return(
        <div className="song">
        <p className="title"> {title} </p>
         <p className="singer"> {name} </p>
        <img src={image} alt="cover" />
        <Link to="/Video" className="ShowVideo" onClick={handleClick}> Show video </ Link> 
        </div>
        )
       
    

};

export default Top10;