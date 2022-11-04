import React from 'react'
import { userLinks } from '../../data/data';
import './Links.css'

const Links = () => {
  return (
    <>
    <div className="link-container">
            {userLinks.map((link) => {
              return (
                <>
                  <div className="link-button">
                    <a className="link" id={link.id} href={link.link}>
                      {link.title}
                    </a>
                  </div>
                </>
              );
            })}
          </div>
    </>
  )
}

export default Links