import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';
import sidebarReducer from './sidebarSlice';
import sidecartReducer from './sidecartSlice';
import saerchReducer from './searchIconSlice';
import items from './itemSlice';
import cart from './cartSlice';
import shopitems from './shopItemSlice';
import blog from './blogSlice';
import sidecategory from './sidecategorySlice';
import user from './supportstaff/userSlice';

export default configureStore({
  reducer: {
    sidenavigation: sidebarReducer,
    sidecart: sidecartReducer,
    searchIcon: saerchReducer,
    items,
    cart,
    shopitems,
    blog,
    sidecategory,
    user,
  },
});