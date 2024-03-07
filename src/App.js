// App.js

import React from "react";
import "./App.css";
import ProfileImage from "./ProfileImage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="intro-section">
        <ProfileImage />
        <div className="intro-text">
          <h1>Siddhant Thakur</h1>
          <p>
            Code whisperer by day, design ninja by night! I bridge the gap
            between engineering and creativity, building beautiful mobile apps
            with Flutter and wielding Photoshop like a pro. Let's craft
            something amazing!
          </p>
        </div>
      </div>
      <div className="content-section">
        <h2>Here is all the stuff I do</h2>
        {/* Add content for your stuff */}
      </div>
      <div className="content-section">
        <h2>Here is some stuff I made Recently</h2>
        {/* Add content for your recent stuff */}
        <button>Get in touch with me</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
