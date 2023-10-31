import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Redux/Slices/CounterSlice'
import ageReducer from '../Redux/Slices/ageSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    age: ageReducer,
  },
})