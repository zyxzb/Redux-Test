import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    text: '',
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.value = 0
    },
    textValue: (state, action) => {
      state.text += action.payload
    },
    textReset: (state) => {
      state.text = ''
    },
  },
})

export const { increment, decrement, reset, textValue,textReset } = counterSlice.actions

export default counterSlice.reducer