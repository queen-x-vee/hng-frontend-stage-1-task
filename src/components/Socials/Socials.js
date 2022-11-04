import React from 'react'
import { SocialLinks } from '../../data/data';
import './Socials.css'

const Socials = () => {
  return (
    <>
    <div className="socials">
          {SocialLinks.map((social) => {
            return (
              <div id={social.id}>
                <img src={social.slackImage} alt="slack" />
                <img src={social.gitImage} alt="github" />
              </div>
            );
          })}
        </div>
    </>
  )
}

export default Socials