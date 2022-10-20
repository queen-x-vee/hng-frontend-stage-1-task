import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const App = () => {
  return (
    <div className="top-section">
      <div className="top-container">
        <div className="top-content">
          <div className="profile">
            <div className="profile-picture">
              <img id="profile__img" alt="profilepicture" src='../profilePicture.jpeg' />
            </div>
            <div id="twitter">valentinaBuoro</div>
          </div>
          <ul className="links">
          <li>
              <Link className="link">Twitter link</Link>
            </li>
            <li>
              <Link className="link">Zuri Team</Link>
            </li>
            <li>
              <Link className="link">Zuri Books</Link>
            </li>
            <li>
              <Link className="link">Python Books</Link>
            </li>
            <li>
              <Link className="link">Background Check for coders</Link>
            </li>
            <li>
              <Link className="link">Design books</Link>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-content">
          <div className="socials">
          <img src= '../public/slack.png' alt='slack'/>
          <img src = '../public/Icon.png' alt ='github'/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default App;
