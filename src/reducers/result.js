//import { CHANGE_SCENE } from '../actions/app'

const initialState = {
  scene: 'diff'
}

export default (state = initialState, action) => {
  switch (action.type) {
    //case CHANGE_SCENE:
    //  return Object.assign({}, state, {
    //    scene: action.payload.sceneName
    //  })
    default:
      return state
  }
}
