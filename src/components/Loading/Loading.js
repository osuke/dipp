import React, { Component } from 'react'
import { FontIcon } from 'react-toolbox'
import styles from './loading.css'

export default class App extends Component {
  render () {
    if (this.props.before.file && this.props.after.file) {
      return (
        <FontIcon
          className={styles.icon}
          value="invert_colors" />
      )
    } else {
      return null
    }
  }
}
