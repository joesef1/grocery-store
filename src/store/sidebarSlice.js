import { createSlice } from '@reduxjs/toolkit';


const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: { sidenavstate: false},
  reducers: {

    opensidenav: (state ) => {
      state.sidenavstate = false;
    },
    closesidenav: (state ) => {
      state.sidenavstate = true;
    },
    
  },
});

export const  {opensidenav,closesidenav}  = sidebarSlice.actions
export default sidebarSlice.reducer;

