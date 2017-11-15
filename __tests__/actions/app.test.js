import { CHANGE_SCENE, changeScene } from '../../src/actions/app'

describe('app actions', () => {
  it('should create CHANGE_SCENE action', () => {
    const expectedAction = {
      type: CHANGE_SCENE,
      payload: {
        sceneName: 'result'
      }
    }
    expect(changeScene('result')).toEqual(expectedAction)
  })
})
