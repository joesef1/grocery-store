// import {create} from 'zustand';
// import Data from '../Data';
// // import { data } from 'autoprefixer';

// const usesubcategoryStore = create((set, get) => ({
//   // originalData: [Data],
//   data: [],
//   // setOriginalData: (originalData) => set({ originalData }),
//   // setData: (data) => set({ data }),
//   filtercategory: (category) => {
//     const result = Data.filter((item) => item.category === category);
//     set({ data: result });
//     // console.log(result);
//   },
//   filterSubcategory: (subcategory) => {
//     const subcategoryresult = Data.filter((item) => item.subcategory === subcategory);
//     set({ data: subcategoryresult });
//   },
// }));

// export default usesubcategoryStore;


















// import { useState } from "react";
// import {confirmPasswordReset, createUserWithEmailAndPassword} from "firebase/auth";
// import { auth } from "../firebase-config";
// import { useNavigate } from 'react-router-dom';
// import  Pagebanner  from "../components/Pagebanner";
// import  account  from "../assets/images/my-account.jpg";

// // import { useForm } from "react-hook-form";
// // import { yupResolver } from "@hookform/resolvers/yup";
// // import * as yup from "yup";

// const Signup = () => {

// // const schema = yup.object().shape({
// //     email: yup.string().email().required("wrong email "),
// //     password: yup.string().min(8).max(20).required(),
// //     confirmPassword: yup
// //     .string()
// //     .oneOf( [yup.ref ("password"), null], "Passwords Don't Match")
// //     .required(),
// // });


// // const {register, handleSubmit ,formState: {errors} } = useForm({
// //    resolver: yupResolver(schema),
// // });

// // const onSubmit =(data) =>{
// //   console.log(data);
// // }
  


// //   const navigate = useNavigate();
// //   const [registerEmail, setRegisterEmail] = useState("");
// //   const [registerPassword, setRegisterPassword] = useState("");
// //   const [confirmPasswordReset, setConfirmPasswordReset] = useState("");

// //   return (
// //     <div>
// //       <Pagebanner
// //       pagename='account'
// //       imgname={account}
// //       />
// //       <div class="bg-gray-50 p-8 rounded-lg shadow-md lg:w-[40%] md:w-[60%] sm:w-[70%] w-[85%] mx-auto">
// //   <h3 class="text-lg font-bold mb-4">Register User</h3>

// // <form 
// // // onSubmit={handleSubmit(onSubmit)}
// // >
// //   <input
// //     class="border border-gray-400 p-2 rounded-lg mb-4 w-full"
// //     // {...register("email")}
// //     type="email"
// //     placeholder="Email..."
// //     onChange={(event) => {
// //       setRegisterEmail(event.target.value);
// //     }}
// //   />
// //   {/* <p></p> */}
// //   {/* <p>{errors.email?.message}</p> */}
// //   <input
// //     class="border border-gray-400 p-2 rounded-lg mb-4 w-full"
// //     // {...register("password")}
// //     type="password"
// //     placeholder="Password..."
// //     onChange={(event) => {
// //       setRegisterPassword(event.target.value);
// //     }}
// //   />
// //   {/*  */}
// //   <input
// //     class="border border-gray-400 p-2 rounded-lg mb-4 w-full"
// //     // {...register("confirmPassword")}
// //     type="password"
// //     placeholder="confirm Password..."
// //     onChange={(event) => {
// //       setConfirmPasswordReset(event.target.value);
// //     }}
// //   />
// //   </form>

// //   {/*  */}
// //   <div className="text-center w-[100%] ">
// //     <button
// //       class="bg-[#212121] mx-auto mt-6 w-[100%] text-white font-bold py-2 px-4 rounded-lg"
// //       // onClick={register}

      

// //     >
// //       Create User
// //     </button>
// //   </div>
// // </div>
// //     </div>
// //   )
// // }

// // export default Signup
