import { ADD_FILE, ADD_DIFF_FILE } from '../actions/file'

const initialState = {
  beforeImage: null,
  afterImage: null,
  diffImage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILE:
      let tmp = {}

      if (action.payload.cntxt === 'before') {
        tmp.beforeImage = action.payload.src
      } else {
        tmp.afterImage = action.payload.src
      }
      return Object.assign({}, state, tmp)
    case ADD_DIFF_FILE:
      return Object.assign({}, state, {
        diffImage: action.payload.src
      })
    default:
      return state
  }
}
