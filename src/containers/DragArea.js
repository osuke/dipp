import React from 'react'
import { connect } from 'react-redux'
import DragArea from '../components/DragArea/DragArea'
import { extractFile, createDiffFile } from '../actions/file'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    extractFile: (e, cntxt) => { dispatch(extractFile(e, cntxt)) },
    createDiffFile: () => { dispatch(createDiffFile()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragArea)
