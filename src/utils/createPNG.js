import fs from 'fs'

export default (fileName, base64) => (
  new Promise((resolve, reject) => {
    const arr = base64.split(';base64,')

    fs.writeFile('./tmp/' + fileName + '.png', arr[1], {encoding: 'base64'}, (err) => {
      if (err) {
        return
      }

      resolve('File created')
    })
  })
)
