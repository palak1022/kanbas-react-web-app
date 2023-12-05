import React from "react";
import ModuleList from "../Modules/ModuleList";

function Home() {
  return (
    <div className="home-container">
      <div className="main-content">
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className="sidebar">
        <h2>Status</h2>
        {/* Placeholder for status information */}
        <p>Status information goes here...</p>
        <h2>Additional Links</h2>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </div>
  );
}

export default Home;
