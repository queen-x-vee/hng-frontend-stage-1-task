import React from "react";

import "./index.css";
import { UserDetails, userLinks, SocialLinks, FooterLinks } from "./data/data";
import shareBtn from "./data/_Avatar share button.png";
import contentBtn from "./data/Content.png";

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
                <div >
                  <p className="profile-name" id={user.id}>{user.userNameTwitter}</p>
                </div>
                <p id="slack">{user.userNameSlack}</p>
                <a href="/">
                  <img className="share-button" src={shareBtn} alt="share" />
                </a>
                <a href="/">
                  <img className="content-button" src={contentBtn} alt="content" />
                </a>
              </div>
            );
          })}
          <ul className="links">
            {userLinks.map((link) => {
              return (
                <>
                  <li>
                    <a className="link" id={link.id} href={link.link}>
                      {link.title}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="bottom-container">
        <div className="socials">
          {SocialLinks.map((social) => {
            return (
              <>
                <img src={social.slackImage} alt="slack" />
                <img src={social.gitImage} alt="github" />
              </>
            );
          })}
        </div>
      </div>
      <footer>
        {FooterLinks.map((footer) => {
          return (
            <div className="footer-icon">
              <img src={footer.Image1} alt="Zuri" />
              <p> HNG Internship 9 Frontend Task</p>
              <img src={footer.Image2} alt="ingressive" />
            </div>
          );
        })}
      </footer>
    </div>
  );
};

export default App;
