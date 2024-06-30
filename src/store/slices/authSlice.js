import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: Cookies.get('userInfo')
      ? JSON.parse(Cookies.get('userInfo'))
      : null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload
      Cookies.set('userInfo', JSON.stringify(action.payload))
    },
    logOut: (state, action) => {
      state.userInfo = action.payload
      Cookies.remove('userInfo')
    },
  },
})
export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer
