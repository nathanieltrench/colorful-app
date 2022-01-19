import React from "react";
import fireworks from "./resources/fireworks2.webp"

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const Home = () => {
  return (
    <div className="app-content">
      <h1>Now Presenting</h1>
      <h2>The Wonderful World of Colorful Applications</h2>
      <img src={fireworks} alt="colorful fireworks display"></img>
    </div>
  );
};

export default Home;


