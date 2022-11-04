import React from 'react'
import { SocialLinks } from '../../data/data';
import './Socials.css'

const Socials = () => {
  return (
    <>
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
    </>
  )
}

export default Socials