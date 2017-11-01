import React, { Component } from 'react'
import resetCss from 'reset-css/reset.css'
import styles from './app.css'
import DragArea from '../../containers/DragArea'
import Result from '../../containers/Result'

export default class App extends Component {
  componentDidUpdate () {
    if (this.props.file.before.obj && this.props.file.after.obj && !this.props.file.diff.obj) {
      this.props.createDiffFile()
    }

    if (this.props.app.scene === 'upload' && this.props.file.diff.obj) {
      this.props.changeScene('result')
    }
  }
  render () {
    if (!this.props.app.scene || this.props.app.scene === 'upload') {
      return (
        <div className={styles.container}>
          <DragArea {...this.props.file.before} cntxt="before" />
          <DragArea {...this.props.file.after} cntxt="after" />
        </div>
      )
    } else {
      return (
        <Result />
      )
    }
  }
}
