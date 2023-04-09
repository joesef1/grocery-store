import { createSlice } from '@reduxjs/toolkit';


const sidecartSlice = createSlice({
  name: 'sidecart',
  initialState: { sidecartstate: false},
  reducers: {

    opensidecart: (state ) => {
      state.sidecartstate = true;
    },
    closesidecart: (state ) => {
      state.sidecartstate = false;
    },
    
  },
});

export const  {opensidecart,closesidecart}  = sidecartSlice.actions
export default sidecartSlice.reducer;

