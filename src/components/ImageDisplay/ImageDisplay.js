import React from 'react'
import styles from './imageDisplay.css'

export default ({ src }) => (
  <div className={styles.container}>
    <img src={src} />
  </div>
)
