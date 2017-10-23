import React from 'react'
import { connect } from 'react-redux'
import App from '../components/App/App'
import { changeScene } from '../actions/app'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeScene: (sceneName) => { dispatch(changeScene(sceneName)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
