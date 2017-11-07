import fs from 'fs'
import createPNG from '../utils/createPNG'
import CreateDiffPNG from '../utils/CreateDiffPNG'
export const ADD_FILE = 'ADD_FILE'
export const ADD_DIFF_FILE = 'ADD_DIFF_FILE'
export const GENERATE_FILE = 'GENERATE_FILE'

export const addFile = (data) => (
  {
    type: ADD_FILE,
    payload: data
  }
)

export const generateFile = (cntxt) => (
  {
    type: GENERATE_FILE,
    payload: {
      cntxt: cntxt
    }
  }
)

export const addDiffFile = (data) => (
  {
    type: ADD_DIFF_FILE,
    payload: data
  }
)

export const extractFile = (e, cntxt) => (
  (dispatch) => {
    const reader = new FileReader()
    const image = new window.Image()

    reader.readAsDataURL(e.dataTransfer.files[0])
    reader.onload = (e) => {
      image.src = e.currentTarget.result
      image.onload = () => {
        let imageWidth = image.width
        let imageHeight = image.height

        if (imageWidth > window.innerWidth / 2) {
          imageWidth = window.innerWidth / 2 - 20
          imageHeight = imageWidth / image.width * imageHeight
        }

        if (imageHeight > window.innerHeight) {
          imageHeight = window.innerHeight - 20
          imageWidth = imageHeight / image.height * imageWidth
        }
        const data = {
          src: image,
          width: imageWidth,
          height: imageHeight,
          cntxt: cntxt
        }
        dispatch(addFile(data))
      }
    }
  }
)

export const createPNGFile = (cntxt, data) => (
  async (dispatch) => {
    await createPNG(cntxt, data)
    dispatch(generateFile(cntxt))
  }
)

export const createDiffFile = () => (
  async (dispatch) => {
    await (() => {
      return new Promise((resolve, reject) => {
        new CreateDiffPNG(() => {
          resolve()
        })
      })
    })()

    const buff = fs.readFileSync('./tmp/diff.png')
    const base64data = buff.toString('base64')
    let image = new window.Image()

    image.src = 'data:image/png;base64,' + base64data
    image.onload = () => {
      const data = {
        src: image,
        width: image.width,
        height: image.height
      }
      dispatch(addDiffFile(data))
    }
  }
)
