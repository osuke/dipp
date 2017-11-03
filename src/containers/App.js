import { connect } from 'react-redux'
import App from '../components/App/App'
import { changeScene } from '../actions/app'
import { createDiffFile } from '../actions/file'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeScene: (sceneName) => { dispatch(changeScene(sceneName)) },
    createDiffFile: () => { dispatch(createDiffFile()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
