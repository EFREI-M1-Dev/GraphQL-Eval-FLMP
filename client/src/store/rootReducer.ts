import { combineReducers } from '@reduxjs/toolkit'
import userConnectedSlice from '../features/userConnectedSlice'

export const rootReducer = combineReducers({
  userConnected: userConnectedSlice,
})
