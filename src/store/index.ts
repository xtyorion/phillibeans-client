import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/auth.slice';
import categorySlice from './slices/category.slice';
import typeSlice from './slices/type.slice';
import userchallengeSlice from './slices/userchallenge.slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    category: categorySlice.reducer,
    type: typeSlice.reducer,
    userchallenge: userchallengeSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch
export default store;