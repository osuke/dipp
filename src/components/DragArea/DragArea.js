import React, { Component } from 'react'
import styles from './dragArea.css'

export default class DragArea extends Component {
  componentDidUpdate () {
    if (this.props.file.beforeImage && this.props.file.afterImage && !this.props.file.diffImage) {
      this.props.createDiffFile()
    }
  }
  render () {
    if (this.props.src) {
      return (
        <div
          className={styles.container}
          onDragOver={(e) => { e.preventDefault() }}
          onDrop={(e) => {
            e.preventDefault()
            this.props.extractFile(e, this.props.cntxt)
          }}>
          <img src={this.props.src} />
        </div>
      )
    } else {
      return (
        <div
          className={styles.container}
          onDragOver={(e) => { e.preventDefault() }}
          onDrop={(e) => {
            e.preventDefault()
            this.props.extractFile(e, this.props.cntxt)
          }}>
          {this.props.cntxt}
        </div>
      )
    }
  }
}
