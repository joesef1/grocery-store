import { createSlice } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../firebase-config';



const userSlice = createSlice({
  name: 'user',
  initialState: { user: true, authuserid: ''},
  reducers: {

    CustomerStateFunc: (state ) => {
      state.user = true;
    },
    staffStateFunc: (state ) => {
      state.user = false;
    },

    setuseridfunc: (state,action ) => {
      state.authuserid = action.payload;
    },
    
  },
});

    export const getuserid = () => async (dispatch) => {
      try {
      
    //     const userCredential = await signInWithEmailAndPassword(auth); // Replace with your authentication method and parameters
    //     const user = userCredential.user;
    //   // Access the user ID
    //   const userauthId = user.uid;
    // dispatch(setuseridfunc(userauthId));
    // console.log(userauthId);
    
    
      } catch (err) {
        console.error(err);
      }
    };

export const  {setuseridfunc ,staffStateFunc,CustomerStateFunc}  = userSlice.actions
export default userSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';
// import { signInWithEmailAndPassword } from 'firebase/auth';

// const userSlice = createSlice({
//   name: 'user',
//   initialState: { user: true, userid: '' },
//   reducers: {
//     CustomerStateFunc: (state) => {
//       state.user = true;
//     },
//     staffStateFunc: (state) => {
//       state.user = false;
//     },
//     setuseridfunc: (state, action) => {
//       state.userid = action.payload;
//     },
//   },
// });

// export const fetchUserId = () => async (dispatch) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword();
//     const user = userCredential.user;
//     const userId = user.uid;
//     dispatch(setuseridfunc(userId));
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const { setuseridfunc, staffStateFunc, CustomerStateFunc } = userSlice.actions;
// export default userSlice.reducer;
