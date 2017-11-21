import React, { Component } from 'react'
import resetCSS from 'reset-css/reset.css'
import styles from './app.css'
import DragArea from '../../containers/DragArea'
import Loading from '../Loading/Loading'
import Alert from '../../containers/Alert'
import Result from '../Result/Result'
import PropTypes from 'prop-types'

export default class App extends Component {
  componentDidUpdate () {
    if (this.props.file.before.file && this.props.file.after.file && !this.props.file.diff.file) {
      this.props.createDiffFile()
    }

    if (this.props.scene === 'upload' && this.props.file.diff.file) {
      this.props.changeScene('result')
    }
  }

  render () {
    if (this.props.scene === 'upload') {
      return (
        <div className={styles.container}>
          <DragArea {...this.props.file.before} cntxt="before" />
          <DragArea {...this.props.file.after} cntxt="after" />
          <Loading {...this.props.file} />
          <Alert {...this.props.file} />
        </div>
      )
    } else {
      return (
        <Result {...this.props.file} />
      )
    }
  }
}

App.propTypes = {
  scene: PropTypes.string.isRequired,
  file: PropTypes.object.isRequired,
  changeScene: PropTypes.func.isRequired,
  createDiffFile: PropTypes.func.isRequired
}
