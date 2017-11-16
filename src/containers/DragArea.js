import { connect } from 'react-redux'
import DragArea from '../components/DragArea/DragArea'
import { extractFile, createDiffFile, createPNGFile } from '../actions/file'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    extractFile: (data, cntxt) => { dispatch(extractFile(data, cntxt)) },
    createDiffFile: () => { dispatch(createDiffFile()) },
    createPNGFile: (cntxt, data) => { dispatch(createPNGFile(cntxt, data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragArea)
