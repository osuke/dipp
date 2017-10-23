export const CHANGE_SCENE = 'CHANGE_SCENE'

export const changeScene = (sceneName) => (
  {
    type: CHANGE_SCENE,
    payload: {
      sceneName: sceneName
    }
  }
)
