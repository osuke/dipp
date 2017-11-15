import reducer from '../../src/reducers/file'
import { ADD_FILE, ADD_DIFF_FILE, GENERATE_FILE } from '../../src/actions/file'

describe('app reducer', () => {
  it('should return the initialState', () => {
    expect(reducer(undefined, {})).toEqual(
      {
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
    )
  })

  it('should handle ADD_FILE', () => {
    const addFileAction = {
      type: ADD_FILE,
      payload: {
        src: {},
        width: 10,
        height: 10,
        cntxt: 'before'
      }
    }

    expect(reducer({
      before: {
        obj: {},
        width: 0,
        height: 0,
        file: false
      }
    }, addFileAction)).toEqual({
      before: {
        obj: {},
        width: 10,
        height: 10,
        file: false
      }
    })
  })

  it('should handle ADD_DIFF_FILE', () => {
    const addDiffFileAction = {
      type: ADD_DIFF_FILE,
      payload: {
        src: {},
        width: 10,
        height: 10
      }
    }

    expect(reducer({
      diff: {
        obj: {},
        width: 0,
        height: 0,
        file: false
      }
    }, addDiffFileAction)).toEqual({
      diff: {
        obj: {},
        width: 10,
        height: 10,
        file: true
      }
    })
  })

  it('should handle GENERATE_FILE', () => {
    const generateFileAction = {
      type: GENERATE_FILE,
      payload: {
        cntxt: 'before'
      }
    }

    expect(reducer({
      before: {
        obj: {},
        width: 0,
        height: 0,
        file: false
      }
    }, generateFileAction)).toEqual({
      before: {
        obj: {},
        width: 0,
        height: 0,
        file: true
      }
    })
  })
})
