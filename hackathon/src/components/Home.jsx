import React from 'react'
import Top10List from '../Top10List';

import './Home.css';


function Home() {

// function handleClick () {
//   return 
// }
  
   return (
   
     <div className="Home">

     <div className="homeTitle">
        <h1>Music for life</h1>
    </div>
    <div className="homeText">
      <p>let's play the music </p>
    </div>

    <div className="homeContainer">
      <title>Rechercher</title>
      <form>
          <label rechercher>Artiste, chanson</label>
          <input type="text" id ="id" name="search" placeholder="Artiste ou titre" />
      <button className="homeButton" >
      Go
      </button>
    </form>
   </div>
   <Top10List />
</div>

   )
}

export default Home;