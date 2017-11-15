import reducer from '../../src/reducers/app'
import { CHANGE_SCENE } from '../../src/actions/app'

describe('app reducer', () => {
  it('should return the initialState', () => {
    expect(reducer(undefined, {})).toEqual({scene: 'upload'})
  })

  it('should handle CHANGE_SCENE', () => {
    expect(reducer(undefined, {
      type: CHANGE_SCENE,
      payload: {
        sceneName: 'result'
      }
    })).toEqual({scene: 'result'})
  })
})
