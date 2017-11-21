import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  FILE_TYPE_ERROR,
  RESET_FILE_TYPE_ERROR,
  ADD_FILE,
  ADD_DIFF_FILE,
  GENERATE_FILE,
  fileTypeError,
  resetFileTypeError,
  addFile,
  generateFile,
  addDiffFile,
  createPNGFile
} from '../../src/actions/file'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('file actions', () => {
  it('should create FILE_TYPE_ERROR action', () => {
    const expectedAction = {
      type: FILE_TYPE_ERROR
    }
    expect(fileTypeError()).toEqual(expectedAction)
  })

  it('should create RESET_FILE_TYPE_ERROR action', () => {
    const expectedAction = {
      type: RESET_FILE_TYPE_ERROR
    }
    expect(resetFileTypeError()).toEqual(expectedAction)
  })

  it('should create ADD_FILE action', () => {
    const expectedAction = {
      type: ADD_FILE,
      payload: {}
    }
    expect(addFile({})).toEqual(expectedAction)
  })

  it('should create GENERATE_FILE action', () => {
    const expectedAction = {
      type: GENERATE_FILE,
      payload: {
        cntxt: 'before'
      }
    }
    expect(generateFile('before')).toEqual(expectedAction)
  })

  it('should create ADD_DIFF_FILE action', () => {
    const expectedAction = {
      type: ADD_DIFF_FILE,
      payload: {}
    }
    expect(addDiffFile({})).toEqual(expectedAction)
  })

  it('should create ADD_DIFF_FILE action when createPNGFile has been done', () => {
    const expectedAction = [
      {
        type: GENERATE_FILE,
        payload: {
          cntxt: 'before'
        }
      }
    ]

    const store = mockStore({})
    const dummyImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAXElEQVQoU2M8c+bMf0lJSQZ84Pnz5wyMT58+/Q9iGBsbY1V79uxZBikpKYhCEAMkgK4YJgY3EaQQBJAVI7MxFMIUg2hk08lXSJTVRHmGqOABBTjM17gC/dmzZwwAO/NmWWlwfdAAAAAASUVORK5CYII='

    return store.dispatch(createPNGFile('before', dummyImage)).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })
  })
})
