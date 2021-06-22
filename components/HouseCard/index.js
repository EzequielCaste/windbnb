import React from 'react'
import styles from './HouseCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';


export const HouseCard = ({stay}) => {
  const {photo,name,superHost,type,beds,rating,title} = stay; 
  return (
    <div>
      <img src={photo} alt={`Image for ${name}`} />
      <footer className={styles.footer}>
        <div>
          {superHost && (
           <span className={styles.superHost}>{'SUPER HOST'}</span>
          )}
          <span className={styles.description}>
            {type}
            {
              beds && (
                beds == 1 ? ` ${beds} bed` : ` ${beds} beds`
              )
            }
          </span>          
          
          <span className={styles.rating}>
          <FontAwesomeIcon icon={faStar} />
            {rating}
            </span>
        </div>
        <div className={styles.title}>
          {title}
        </div>
      </footer>
    </div>
  )
}
