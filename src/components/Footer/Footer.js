import React from 'react'
import { FooterLinks } from '../../data/data';
import './Footer.css'
const Footer = () => {
  return (
    <>
    <footer>
        {FooterLinks.map((footer) => {
          return (
            <div className="footer-icon" id={footer.id}>
              <img src={footer.Image1} alt="Zuri" />
              <p> HNG Internship 9 Frontend Task</p>
              <img src={footer.Image2} alt="ingressive" />
            </div>
          );
        })}
      </footer>
    </>
  )
}

export default Footer