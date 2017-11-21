import React, { Component } from 'react'
import styles from './dragArea.css'
import PropTypes from 'prop-types'

export default class DragArea extends Component {
  constructor (props) {
    super(props)
    this.state = {
      eventName: ''
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return (nextProps.obj !== this.props.obj) || (this.state.eventName !== nextState.eventName)
  }

  componentDidUpdate () {
    if (!this.refs.canvas || this.props.file) return

    this.ctx = this.refs.canvas.getContext('2d')
    this.ctx.drawImage(this.props.obj, 0, 0, this.props.obj.width, this.props.obj.height, 0, 0, this.props.width, this.props.height)
    this.props.createPNGFile(this.props.cntxt, this.refs.canvas.toDataURL())
  }

  dragOverHandler (e) {
    e.preventDefault()
    this.setState(() => {
      return { eventName: 'dragOver' }
    })
  }

  dragLeaveHandler (e) {
    e.preventDefault()
    this.setState(() => {
      return { eventName: 'dragLeave' }
    })
  }

  dropHandler (e) {
    e.preventDefault()
    this.setState(() => {
      return { eventName: 'dragLeave' }
    })
    this.props.extractFile(e.dataTransfer.files[0], this.props.cntxt)
  }

  render () {
    if (this.props.width && this.props.height) {
      return (
        <div
          className={styles.container}
          onDragOver={(e) => { e.preventDefault() }}
          onDrop={(e) => {
            e.preventDefault()
            this.props.extractFile(e.dataTransfer.files[0], this.props.cntxt)
          }}>
          <canvas ref="canvas" width={this.props.width} height={this.props.height}></canvas>
        </div>
      )
    } else {
      return (
        <div
          className={`${styles.container} ${styles[this.state.eventName]}`}
          onDragOver={this.dragOverHandler.bind(this)}
          onDragLeave={this.dragLeaveHandler.bind(this)}
          onDrop={this.dropHandler.bind(this)}>
          Drop an image
        </div>
      )
    }
  }
}

DragArea.propTypes = {
  obj: PropTypes.object.isRequired,
  file: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  cntxt: PropTypes.string.isRequired,
  extractFile: PropTypes.func.isRequired,
  createPNGFile: PropTypes.func.isRequired
}
