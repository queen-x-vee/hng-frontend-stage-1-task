import React from 'react'
import './Header.css'
import { UserDetails,  } from '../../data/data';
import shareBtn from '../../data/_Avatar share button.png'
import contentBtn from '../../data/Content.png'

const Header = () => {
  return (
    <>
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
          
    </>
  )
}

export default Header