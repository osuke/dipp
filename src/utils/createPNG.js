import fs from 'fs'

export default (fileName, base64) => {
  const base64Image = base64.split(';base64,').pop()
  fs.writeFile(fileName, base64Image, {encoding: 'base64'}, function(err) {
    console.log('File created');
  })
}
