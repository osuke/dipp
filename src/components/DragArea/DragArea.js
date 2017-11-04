import React, { Component } from 'react'
import styles from './dragArea.css'

export default class DragArea extends Component {
  constructor (props) {
    super(props)
    this.state = {
      eventName: ''
    }
  }

  componentDidUpdate () {
    if (!this.refs.canvas || this.props.file[this.props.cntxt].file) return

    this.ctx = this.refs.canvas.getContext('2d')
    this.ctx.drawImage(this.props.file[this.props.cntxt].obj, 0, 0, this.props.file[this.props.cntxt].obj.width, this.props.file[this.props.cntxt].obj.height, 0, 0, this.props.file[this.props.cntxt].width, this.props.file[this.props.cntxt].height)
    this.props.createPNGFile(this.props.cntxt, this.refs.canvas.toDataURL())
  }

  dragOverHandler (e) {
    e.preventDefault()
    this.setState(() => {
      return { eventName: 'dragOver'}
    })
  }

  dragLeaveHandler (e) {
    e.preventDefault()
    this.setState(() => {
      return { eventName: 'dragLeave'}
    })
  }

  render () {
    if (this.props.file[this.props.cntxt].obj) {
      return (
        <div
          className={styles.container}
          onDragOver={(e) => { e.preventDefault() }}
          onDrop={(e) => {
            e.preventDefault()
            this.props.extractFile(e, this.props.cntxt)
          }}>
          <canvas ref="canvas" width={this.props.file[this.props.cntxt].width} height={this.props.file[this.props.cntxt].height}></canvas>
        </div>
      )
    } else {
      return (
        <div
          className={`${styles.container} ${styles[this.state.eventName]}`}
          onDragOver={this.dragOverHandler.bind(this)}
          onDragLeave={this.dragLeaveHandler.bind(this)}
          onDrop={(e) => {
            e.preventDefault()
            this.props.extractFile(e, this.props.cntxt)
          }}>
          Drop an image
        </div>
      )
    }
  }
}
