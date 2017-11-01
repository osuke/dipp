import { ADD_FILE, ADD_DIFF_FILE, GENERATE_FILE } from '../actions/file'

const initialState = {
  before: {
    obj: null,
    width: null,
    height: null,
    file: false
  },
  after: {
    obj: null,
    width: null,
    height: null,
    file: false
  },
  diff: {
    obj: null,
    width: null,
    height: null,
    file: false
  }
}

export default (state = initialState, action) => {
  let tmp = state
  switch (action.type) {
    case ADD_FILE:
      tmp[action.payload.cntxt].obj = action.payload.src
      tmp[action.payload.cntxt].width = action.payload.width
      tmp[action.payload.cntxt].height = action.payload.height
      return Object.assign({}, state, tmp)
    case GENERATE_FILE:
      tmp[action.payload.cntxt].file = true
      return Object.assign({}, state, tmp)
    case ADD_DIFF_FILE:
      tmp.diff.obj = action.payload.src
      tmp.diff.width = action.payload.width
      tmp.diff.height = action.payload.height
      return Object.assign({}, state, tmp)
    default:
      return state
  }
}
