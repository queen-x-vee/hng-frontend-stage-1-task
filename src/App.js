import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { UserDetails, userLinks,SocialLinks } from "./data/data";


const App = () => {
  return (
    <div className="top-section">
      <div className="top-container">
        <div className="top-content">
          {UserDetails.map((user) => {
            return (
              <div className="profile">
                <div className="profile-picture">
                  <img
                    id="profile__img"
                    alt="profilepicture"
                    src={user.userImage}
                  />
                </div>
                <div id={user.id}><p className="profile-name">{user.userNameTwitter}</p></div>
                <p id="slack">{user.userNameSlack}</p>
              </div>
            );
          })}
          <ul className="links">
            {userLinks.map((link) => {
              return (
                <>
                  <li>
                    <Link className="link" id={link.id} to={link.link}>{link.title}</Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      
        <div className="bottom-container">
          <div className="socials">
            {SocialLinks.map((social)=>{
              return(
                <>
                <img src={social.slackImage} alt="slack" />
                <img src={social.gitImage} alt="github" />
                </>
              )
            })}
            
          </div>
        
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default App;
