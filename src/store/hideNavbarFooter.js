
import { createSlice } from '@reduxjs/toolkit';

const hideNavbarFooter = createSlice({
  name: 'navbarfooter',
  initialState: { hideNavbarFooter: true, },
  reducers: {
    // CustomerStateFunc: (state) => {
    //   state.user = true;
    // },
    // staffStateFunc: (state) => {
    //   state.user = false;
    // },
    // setuseridfunc: (state, action) => {
    //   state.authuserid = action.payload;
    // },
    // storeUserEmail: (state, action) => {
    //   state.registEmail = action.payload;
    //   localStorage.setItem('registEmail', action.payload); // Save registEmail in local storage
    // }
  },
});



// export const  {setuseridfunc ,staffStateFunc,CustomerStateFunc,storeUserEmail}  = hideNavbarFooter.actions
export default hideNavbarFooter.reducer;
