import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';
import sidebarSlice from './sidebarSlice';

export default configureStore({
  reducer: {
    // counter: counterReducer,
    sidebar: sidebarSlice,
  },
});