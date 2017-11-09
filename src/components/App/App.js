import React, { Component } from 'react'
import resetCSS from 'reset-css/reset.css'
import styles from './app.css'
import DragArea from '../../containers/DragArea'
import Loading from '../Loading/Loading'
import Result from '../../containers/Result'

export default class App extends Component {
  componentDidUpdate () {
    if (this.props.file.before.file && this.props.file.after.file && !this.props.file.diff.file) {
      this.props.createDiffFile()
    }

    if (this.props.app.scene === 'upload' && this.props.file.diff.obj) {
      this.props.changeScene('result')
    }
  }

  render () {
    console.log(this.props.file)
    if (this.props.app.scene === 'upload') {
      return (
        <div className={styles.container}>
          <DragArea {...this.props.file.before} cntxt="before" />
          <DragArea {...this.props.file.after} cntxt="after" />
          <Loading {...this.props.file} />
        </div>
      )
    } else {
      return (
        <Result />
      )
    }
  }
}
