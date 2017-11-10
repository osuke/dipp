import { connect } from 'react-redux'
import App from '../components/App/App'
import { changeScene } from '../actions/app'
import { createDiffFile } from '../actions/file'

const mapStateToProps = (state) => (
  {
    file: state.file,
    scene: state.app.scene
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    changeScene: (sceneName) => { dispatch(changeScene(sceneName)) },
    createDiffFile: () => { dispatch(createDiffFile()) }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
