import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.scss'

export const Footer = () => {
  
  return (
    <footer className={styles.footer}> 
      &copy; 2021 created by 
      <a href="https://www.ezecastellanos.com.ar">
        Ezequiel Castellanos 
      </a>
      <div>
        <a
          href="https://twitter.com/Ezequiel_Caste"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faTwitterSquare}
          />
          <i className="fab fa-twitter-square"></i>
        </a>{' '}
        <a
          href="https://www.linkedin.com/in/ezequiel-castellanos-a9ab6b1b8/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
          />
        </a>
      </div>  
    </footer>
  )
}
