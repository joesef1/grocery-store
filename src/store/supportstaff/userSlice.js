import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
  name: 'user',
  initialState: { user: true, userid: ''},
  reducers: {

    CustomerStateFunc: (state ) => {
      state.user = true;
    },
    staffStateFunc: (state ) => {
      state.user = false;
    },

    setuseridfunc: (state,action ) => {
      state.userid = action.payload;
    },
    
  },
});


export const  {setuseridfunc ,staffStateFunc,CustomerStateFunc}  = userSlice.actions
export default userSlice.reducer;




