import React, { Component } from 'react'
import resetCss from 'reset-css/reset.css'
import styles from './app.css'
import DragArea from '../../containers/DragArea'
import Result from '../../containers/Result'

export default class App extends Component {
  componentWillUpdate (nextProps) {
    if (!this.props.file.diffImage && nextProps.file.diffImage) {
      this.props.changeScene('result')
    }
  }
  render () {
    if (!this.props.app.scene || this.props.app.scene === 'upload') {
      return (
        <div className={styles.container}>
          <DragArea src={this.props.file.beforeImage} cntxt="before" />
          <DragArea src={this.props.file.afterImage} cntxt="after" />
        </div>
      )
    } else {
      return (
        <Result />
      )
    }
  }
}
