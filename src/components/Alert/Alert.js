import React, { Component } from 'react'
import { Dialog } from 'react-toolbox'
import PropTypes from 'prop-types'

export default class Alert extends Component {
  render () {
    if (this.props.error) {
      return (
        <Dialog
          actions={[{
            label: 'OK',
            onClick: this.props.resetFileTypeError
          }]}
          active={this.props.error}
          title='File format error'
        >
          File formats should be png, jpg, gif, and svg.
        </Dialog>
      )
    } else {
      return null
    }
  }
}

Alert.propTypes = {
  error: PropTypes.bool.isRequired,
  resetFileTypeError: PropTypes.func.isRequired
}
