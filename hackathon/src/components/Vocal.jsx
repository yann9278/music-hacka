import React, { useState } from "react";

import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";

import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";

import HomePage from "./Home";
import BlogPage from "./Blog";
import NewBlogPostPage from "./NewBlogPost";
import ContactPage from "./Contact";

import './vocal.css';


function Vocal() {
  const commands = [
    {
      command: ["Go to * page", "Go to *", "Open * page", "Open *"],
      callback: (navigatePage) => setNavigateUrl(navigatePage)
    }
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const [navigateUrl, setNavigateUrl] = useState("");
  const pages = ["home", "blog", "new blog post", "contact"];
  const urls = {
    home: "/",
    blog: "/blog",
    "new blog post": "/blog/new",
    contact: "/contact"
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  let navigate = "";

  if (navigateUrl) {
    if (pages.includes(navigateUrl)) {
      navigate = <Navigate to={urls[navigateUrl]} />;
    } else {
      navigate = <p>Could not find page: {navigateUrl}</p>;
    }
  }

  // const handleTanscript = (e) => {
  //   setTranscript(e.target.value);
  // }
  // console.log(transcript)
return (
    <div className="Vocal">
      {/* <BrowserRouter>
        <div id="links">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/blog/new">Add Blog Post</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Routes>
            <Route path="/" exact component={HomePage} />
            <Route path="/home" component={HomePage} />
            <Route path="/blog" exact component={BlogPage} />
            <Route path="/blog/new" component={NewBlogPostPage} />
            <Route path="/contact" component={ContactPage} />
        </Routes>

        {navigate}
      </BrowserRouter> */}

      <p id="transcript">
        <button className="button-talking" onClick={SpeechRecognition.startListening}></button>
        <input 
          type="text" 
          id="transcript-text" 
          placeholder="Say or Write something"
          value={transcript}
          /*onChange = {handleTanscript}*/
        />
      </p>
    </div>
  );

}

export default Vocal;