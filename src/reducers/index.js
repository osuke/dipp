import { combineReducers } from 'redux'
import app from './app'
import file from './file'
import result from './result'

export default combineReducers({
  app,
  file,
  result
})
