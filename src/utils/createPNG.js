import fs from 'fs'
import Jimp from 'jimp'

export default (fileName, base64) => (
  new Promise((resolve, reject) => {
    const arr = base64.split(';base64,')

    if (arr[0].indexOf('jpeg') !== -1) {
      fs.writeFile(fileName + '.jpg', arr[1], {encoding: 'base64'}, (err) => {
        if (err) {
          return
        }

        Jimp.read(fileName + '.jpg', (err, lenna) => {
          if (err) {
            return
          }

          lenna.quality(100).write(fileName + '.png')
          resolve('File created')
        })
      })
    } else {
      fs.writeFile('./tmp/' + fileName + '.png', arr[1], {encoding: 'base64'}, (err) => {
        if (err) {
          return
        }

        resolve('File created')
      })
    }
  })
)
