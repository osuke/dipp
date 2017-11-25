import path from 'path'
import fs from 'fs'

export default (fileName, base64) => (
  new Promise((resolve, reject) => {
    const arr = base64.split(';base64,')
    const tmpDir = path.resolve('./tmp')

    if (!fs.existsSync(tmpDir)) {
      fs.mkdirSync(tmpDir)
    }

    fs.writeFile(path.resolve('./tmp/' + fileName + '.png'), arr[1], {encoding: 'base64'}, (err) => {
      if (err) {
        console.log(err)
        return
      }

      resolve('File created')
    })
  })
)
