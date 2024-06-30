import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  BACKLOG: 0,
  DONE: 0,
  TODO: 0,
  PROGRESS: 0,
  LowPr: 0,
  HighPr: 0,
  ModeratePr: 0,
  dueDateTasks: 0,
}
const tasksSlice = createSlice({
  name: 'task',
  initialState: initialState,
  reducers: {
    setAnalytics: (state, action) => {
      state.BACKLOG = action.payload.BACKLOG
      state.DONE = action.payload.DONE
      state.TODO = action.payload.TODO
      state.PROGRESS = action.payload.PROGRESS
      state.LowPr = action.payload.LowPr
      state.HighPr = action.payload.HighPr
      state.ModeratePr = action.payload.ModeratePr
      state.dueDateTasks = action.payload.dueDateTasks
      localStorage.setItem('lengths', JSON.stringify(action.payload))
    },
  },
})

export const { setAnalytics } = tasksSlice.actions
export default tasksSlice.reducer
