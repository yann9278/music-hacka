import React from 'react'
import Top10List from '../Top10List';
import { Link } from 'react-router-dom';


import './Home.css';


function Home() {

// function handleClick () {
//   return 
// }
  
   return (
   
     <div className="Home">

     <div className="homeTitle">
        <p className="title-music">Nothing but Music</p>
    </div>
    <div className="homeText">
      <p>let's play the music </p>
    </div>

    <div className="homeContainer">
      <title>Rechercher</title>
      <form>
          {/* <label rechercher>Artiste, chanson</label> */}
          {/* <input type="text" id ="id" name="search" placeholder="Artiste ou titre" /> */}
      <button  className="homeBtn" > 
      <Link to="/Video" className="homeButton" > Search for Songs </ Link> 
      </button>
      <button className="homeBtn">
      <Link to="/Radio" className="homeButton" > Listen to the radio </ Link> 
      </button>
    </form>
   </div>
   <Top10List />
</div>

   )
}

export default Home;