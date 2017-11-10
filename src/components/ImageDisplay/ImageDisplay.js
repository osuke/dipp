import React from 'react'
import styles from './imageDisplay.css'
import PropTypes from 'prop-types'

const ImageDisplay = (props) => (
  <div className={styles.container}>
    <img src={props.obj.src} width={props.width} height={props.height} />
  </div>
)

ImageDisplay.propTypes = {
  obj: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}
export default ImageDisplay
