import React, { Component } from 'react'
import { FontIcon } from 'react-toolbox'
import styles from './loading.css'
import PropTypes from 'prop-types'

export default class Loading extends Component {
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

Loading.propTypes = {
  before: PropTypes.object.isRequired,
  after: PropTypes.object.isRequired
}
