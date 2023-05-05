import { configureStore } from '@reduxjs/toolkit'
import historyReducer from '../features/historySlice'
import stepNumberReducer from '../features/stepNumberSlice'
import themeReducer from '../features/themeSlice'

export default configureStore({
  reducer: {
    newHistory: historyReducer,
    newStepNumber: stepNumberReducer,
    theme: themeReducer
  }
})
