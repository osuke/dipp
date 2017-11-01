import React from 'react'
import styles from './imageDisplay.css'

export default ({ obj, width, height }) => (
  <div className={styles.container}>
    <img src={obj.src} width={width} height={height} />
  </div>
)
