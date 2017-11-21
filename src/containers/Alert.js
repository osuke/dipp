import { connect } from 'react-redux'
import Alert from '../components/Alert/Alert'
import { resetFileTypeError } from '../actions/file'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetFileTypeError: () => { dispatch(resetFileTypeError()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert)
