import React, { Component } from 'react'
import styles from './result.css'
import ImageDisplay from '../ImageDisplay/ImageDisplay'

export default class Result extends Component {
  render () {
    let src = this.props.file.diffImage
    return (
      <div className={styles.container}>
        <ImageDisplay src={src} />
      </div>
    )
  }
}
