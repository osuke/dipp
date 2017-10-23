import fs from 'fs'
import createPNG from '../utils/createPNG'
import CreateDiffPNG from '../utils/CreateDiffPNG'
export const ADD_FILE = 'ADD_FILE'
export const ADD_DIFF_FILE = 'ADD_DIFF_FILE'

export const addFile = (src, cntxt) => (
  {
    type: ADD_FILE,
    payload: {
      src: src,
      cntxt: cntxt
    }
  }
)

export const addDiffFile = (src) => (
  {
    type: ADD_DIFF_FILE,
    payload: {
      src: src
    }
  }
)

export const extractFile = (e, cntxt) => (
  (dispatch) => {
    const reader = new FileReader()
    const fileData = e.dataTransfer.files

    reader.readAsDataURL(fileData[0])
    reader.onload = (e) => {
      const fileName = cntxt + '.png'
      createPNG(fileName, e.currentTarget.result)

      dispatch(addFile(e.currentTarget.result, cntxt))
    }
  }
)

export const createDiffFile = () => (
  (dispatch) => {
    (() => {
      return new Promise((resolve, reject) => {
        new CreateDiffPNG(() => {
          resolve()
        })
      })
    })().then(() => {
      const buff = fs.readFileSync('diff.png');  
      const base64data = buff.toString('base64');
      dispatch(addDiffFile('data:image/png;base64,' + base64data))
    })
  }
)
