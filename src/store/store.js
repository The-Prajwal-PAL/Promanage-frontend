import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import authSlice from './slices/authSlice'
import { userApiSlice } from './api/api'
import { userSlice } from './api/userProtectedApi'
import taskSlice from './slices/taskSlice'
import { TaskApi } from './api/todoapi'
import filterSlice from './slices/filterSlice'
export const store = configureStore({
  reducer: {
    auth: authSlice,
    task: taskSlice,
    fil: filterSlice,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
    [TaskApi.reducerPath]: TaskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApiSlice.middleware,
      userSlice.middleware,
      TaskApi.middleware,
    ),
})
setupListeners(store.dispatch)
