import React from 'react';

function Top10({title, name, image}) {
        return(
        <div className="song">
        <p className="title"> {title} </p>
         <p className="singer"> {name} </p>
        <img src={image} alt="cover" />
        </div>
        )

};

export default Top10;