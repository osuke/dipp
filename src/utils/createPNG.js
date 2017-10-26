import fs from 'fs'
import Jimp from 'jimp'

export default (fileName, base64) => (
  new Promise((resolve, reject) => {
    const arr = base64.split(';base64,')

    if (arr[0].indexOf('jpeg') !== -1) {
      fs.writeFile(fileName + '.jpg', arr[1], {encoding: 'base64'}, function(err) {
        Jimp.read(fileName + '.jpg', (err, lenna) => {
          lenna.quality(100).write(fileName + '.png')
          resolve('File created')
        })
      })
    } else {
      fs.writeFile(fileName + '.png', arr[1], {encoding: 'base64'}, function(err) {
        resolve('File created')
      })
    }
  })
)
