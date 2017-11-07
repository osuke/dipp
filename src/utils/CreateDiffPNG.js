import fs from 'fs'
import { PNG } from 'pngjs'
import pixelmatch from 'pixelmatch'

export default class {
  constructor (callbackFnc) {
    this.callbackFnc = callbackFnc
    this.filesRead = 0
    this.beforeImg = fs.createReadStream('./tmp/before.png').pipe(new PNG()).on('parsed', this.doneReading.bind(this))
    this.afterImg = fs.createReadStream('./tmp/after.png').pipe(new PNG()).on('parsed', this.doneReading.bind(this))
  }

  doneReading () {
    if (++this.filesRead < 2) return
    const diff = new PNG({ width: this.beforeImg.width, height: this.beforeImg.height })

    pixelmatch(this.beforeImg.data, this.afterImg.data, diff.data, this.beforeImg.width, this.beforeImg.height, {threshold: 0.1})
    const cws = diff.pack()
    cws.on('end', () => {
      setTimeout(this.callbackFnc, 2000)
    })
    cws.pipe(fs.createWriteStream('./tmp/diff.png'))
  }
}
