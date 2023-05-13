import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
  name: 'user',
  initialState: { user: true},
  reducers: {

    CustomerStateFunc: (state ) => {
      state.user = true;
    },
    staffStateFunc: (state ) => {
      state.user = false;
    },
    
  },
});


export const  {staffStateFunc,CustomerStateFunc}  = userSlice.actions
export default userSlice.reducer;




