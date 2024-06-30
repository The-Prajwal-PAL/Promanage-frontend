import { createSlice } from '@reduxjs/toolkit'
const filterSlice = createSlice({
  name: 'fil',
  initialState: {
    fil: localStorage.getItem('fil')
      ? JSON.parse(localStorage.getItem('fil'))
      : { filterType: 'week' },
  },
  reducers: {
    setFlter: (state, action) => {
      state.fil.filterType = action.payload
      localStorage.setItem('fil', JSON.stringify({ filterType: action.payload }))
    },
  },
})
export const { setFlter } = filterSlice.actions
export default filterSlice.reducer
