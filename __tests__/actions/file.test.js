import {
  ADD_FILE,
  ADD_DIFF_FILE,
  GENERATE_FILE,
  addFile,
  generateFile,
  addDiffFile
} from '../../src/actions/file'

describe('file actions', () => {
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
})
