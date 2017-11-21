import {
  FILE_TYPE_ERROR,
  RESET_FILE_TYPE_ERROR,
  ADD_FILE,
  ADD_DIFF_FILE,
  GENERATE_FILE
} from '../actions/file'

const initialState = {
  error: false,
  before: {
    obj: {},
    width: 0,
    height: 0,
    file: false
  },
  after: {
    obj: {},
    width: 0,
    height: 0,
    file: false
  },
  diff: {
    obj: {},
    width: 0,
    height: 0,
    file: false
  }
}

export default (state = initialState, action) => {
  let tmp = state

  switch (action.type) {
    case FILE_TYPE_ERROR:
      tmp.error = true
      return Object.assign({}, state, tmp)

    case RESET_FILE_TYPE_ERROR:
      tmp.error = false
      return Object.assign({}, state, tmp)

    case ADD_FILE:
      tmp[action.payload.cntxt].obj = action.payload.src
      tmp[action.payload.cntxt].width = action.payload.width
      tmp[action.payload.cntxt].height = action.payload.height
      return Object.assign({}, state, tmp)

    case GENERATE_FILE:
      tmp[action.payload.cntxt].file = true
      return Object.assign({}, state, tmp)

    case ADD_DIFF_FILE:
      tmp.diff.file = true
      tmp.diff.obj = action.payload.src
      tmp.diff.width = action.payload.width
      tmp.diff.height = action.payload.height
      return Object.assign({}, state, tmp)

    default:
      return state
  }
}
