import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';
import sidebarReducer from './sidebarSlice';
import sidecartReducer from './sidecartSlice';

export default configureStore({
  reducer: {
    // counter: counterReducer,
    sidenavigation: sidebarReducer,
    sidecart: sidecartReducer,
  },
});