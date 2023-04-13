import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';
import sidebarReducer from './sidebarSlice';
import sidecartReducer from './sidecartSlice';
import saerchReducer from './searchIconSlice';
import items from './itemSlice';

export default configureStore({
  reducer: {
    // counter: counterReducer,
    sidenavigation: sidebarReducer,
    sidecart: sidecartReducer,
    searchIcon: saerchReducer,
    items,
  },
});